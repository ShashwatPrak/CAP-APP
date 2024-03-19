from rest_framework.serializers import ModelSerializer
from .models import User_Data, Chats

class UserSerializer(ModelSerializer):
    class Meta:
        model =  User_Data
        fields = '__all__'

class ChatsSerializer(ModelSerializer):
    class Meta:
        model =  Chats
        fields = '__all__'
