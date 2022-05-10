from email.policy import default
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    Dp = models.ImageField(upload_to="Profile/Dp",default="Profile/Dp/profile.jpg",blank=True)
    bio = models.TextField(max_length=250,default="I am new here")
    def __str__(self):
        return self.user.username + " Profile "


class Post(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    username = models.CharField(max_length=100)
    fullname = models.CharField(max_length=100)
    content = models.CharField(max_length=25000)
    created = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.user.username + " Post "

class PostImage(models.Model):
    
    image = models.ImageField(upload_to='PostImages/')

    # def __str__(self):
    #     return self.post.content