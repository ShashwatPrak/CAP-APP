from rest_framework import serializers
from .models import User_Data, Chats

class User_DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Data
        fields = '__all__'

class ChatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chats
        fields = '__all__'
