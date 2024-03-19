# Generated by Django 4.2.2 on 2024-03-09 18:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User_Data',
            fields=[
                ('Name', models.CharField(default=None, max_length=30)),
                ('username', models.CharField(default=None, max_length=30, primary_key=True, serialize=False)),
                ('password', models.CharField(default=None, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Chats',
            fields=[
                ('chatname', models.CharField(default=None, max_length=30)),
                ('Question', models.TextField(default=None, max_length=10000, primary_key=True, serialize=False)),
                ('Answer', models.TextField(default=None, max_length=10000)),
                ('User', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.user_data')),
            ],
        ),
    ]
