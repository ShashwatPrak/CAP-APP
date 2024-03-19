from django.db import models

# Create your models here.

class User_Data(models.Model):
    Name = models.CharField(max_length=30, default = None)
    username = models.CharField(max_length = 30, default = None, primary_key = True)
    password = models.CharField(max_length = 30, default = None)

class Chats(models.Model):
    chatname = models.CharField(max_length=30, default=None)
    Question = models.TextField(max_length=10000, default=None, primary_key=True)
    Answer = models.TextField(max_length=10000, default=None)
    User = models.ForeignKey(User_Data, on_delete = models.CASCADE, default=None)
    #add date and time fields
    
    
    def __str__(self):
        return self.chatname

