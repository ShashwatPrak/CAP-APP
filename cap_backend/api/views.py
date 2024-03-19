from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, ChatsSerializer
from .models import User_Data, Chats
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import numpy as np
import random 

# Create your views here.
@csrf_exempt
@api_view(['GET','POST'])
def new_question(request):
    if (request.method == 'POST'):
        question_data = JSONParser().parse(request)
        question = question_data['question']
        chatname = question_data['chatname']
        if chatname == '':
            chatname = randomtext()
        user = User_Data.objects.filter(username = request.session['username'])
        if user.exists():
             user = user[0]
        answer = answerTheQuestion(question,chatname)
        question_object = Chats.objects.create(Question = question , Answer = answer , chatname = chatname, user = user)
        question_object.save()
        return Response('question answered')    

@csrf_exempt
@api_view(['GET','POST'])
def new_chat(request):
    return answerTheQuestion('', 0)

@csrf_exempt     
@api_view(['GET','POST'])
def displayquestions(request, chatname):
    if request.method=='GET':
        chats = Chats.objects.filter(chatname = chatname)
        if chats.exists():
            chatsSerialised = ChatsSerializer(chats, many=True)
            return Response(chatsSerialised.data)
        return Response('No Questions Found')
@csrf_exempt    
@api_view(['GET','POST']) 
def displaychats(request, usernm):
    if request.method=='GET':
        chat = Chats.objects.filter(User=usernm)
        if chat.exists():
            chatSerialised = ChatsSerializer(chat, many = True)
            return Response(chatSerialised.data)
        return Response('No chats found')


@api_view(['GET','POST'])
def user_login(request):
    if(request.method =='POST'):
        user_data = JSONParser().parse(request)
        username = user_data['username']        
        password = user_data['Password']

        user = User_Data.objects.filter(username = username, password=password)
        if user.exists():
            request.session['username'] = username
            return Response('User Logged In')
        return Response('User does not exist')


def answerTheQuestion(question, instruction):
    if (instruction == 0):
        #chatbot.newChat()
        return Response('NewChatCreated')
    return np.random.randint()
    
def randomtext():
    a=['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    random.shuffle(a)
    for i in range(10):
        print(a[i])
