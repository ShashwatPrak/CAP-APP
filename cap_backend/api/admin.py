from django.contrib import admin
# from .models import Admin_info,Ta_info,Student_info,Courses,Attendance_sessions,Attendance_Records,Announcements,Discussion,Discussion_followup
from .models import *
# Register your models here.

admin.site.register(User_Data)
admin.site.register(Chats)