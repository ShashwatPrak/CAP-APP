from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import User_DataSerializer, ChatsSerializer
from .models import User_Data, Chats
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import numpy as np
import random 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Chats
import random
import string
from django.db.models import Subquery, OuterRef


# Create your views here.
@csrf_exempt
@api_view(['GET','POST'])
def newQuestion(request):
    if request.method == 'POST':
        question_data = request.data  # Assuming your data is sent as form data
        question = question_data['message']
        chatname = question_data['chatcode']  # Retrieve the question data  # Retrieve the chatname data
        flag = True
        flag_2 = True
        print(question)
        print(type(chatname))
        if chatname =='':
            flag = False
            # Generate a random sequence of 6 alphanumeric characters
            while flag_2:
                random_sequence = generate_random_sequence(6)
                chats = Chats.objects.filter(chatname = random_sequence)
                if not chats.exists():
                    flag_2 = False
            chatname = random_sequence
        print(chatname)
        user = 'ashok' 
        userobj = User_Data.objects.filter(username = user)
        userobj = userobj[0] # Assuming you have authenticated users
        answer = answerTheQuestion(question, chatname)
        question_object = Chats.objects.create(Question=question, Answer=answer, chatname=chatname, User=userobj)
        question_object.save()
        if flag == False:
            
            return Response(chatname)
        return Response('Question added successfully')
    
    

@csrf_exempt
@api_view(['GET','POST'])
def new_chat(request):
    return answerTheQuestion('', 0)

@csrf_exempt     
@api_view(['GET','POST'])
def displayquestions(request, usernm,  chatname):
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
        chats = Chats.objects.filter(User = usernm)
        seq = []
        names =[]
        for chat in chats:
            if chat.chatname not in names:
                names.append(chat.chatname)
                seq.append(chat)
        if len(seq)>0:
            chatSerialised = ChatsSerializer(seq, many = True)
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
    return np.random.randint(4)
    
def randomtext():
    a=['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    random.shuffle(a)
    for i in range(10):
        print(a[i])

def generate_random_sequence(length):
    alphanumeric = string.ascii_letters + string.digits
    return ''.join(random.choice(alphanumeric) for _ in range(length))

