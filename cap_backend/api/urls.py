from django.urls import path
from . import views 

urlpatterns = [
    path('displayquestion/<str:usernm>/<str:chatname>/', views.displayquestions, name = 'displayQuestions'),
    path('display/<str:usernm>/', views.displaychats, name = 'displayChatname'),
    path('userlogin', views.user_login, name = 'UserLogin')
]
