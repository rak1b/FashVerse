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
    Cp = models.ImageField(upload_to="Profile/Cp",blank=True)
    
    def __str__(self):
        return self.user.username + " Profile "


class Post(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    
    content = models.CharField(max_length=2500)
    
    
    def __str__(self):
        return self.user.username + " Post "

