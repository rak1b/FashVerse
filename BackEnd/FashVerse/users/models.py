from cgitb import text
from email.policy import default
from pickle import FALSE
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
    
class PostReact(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
    )
    # post = models.CharField(max_length=10)
    love = models.BooleanField(default=FALSE)
    loved_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    # loved_by = models.CharField(
    #     max_length=50
    # )
    def save(self, *args, **kwargs):
        print("react saved")
        from bs4 import BeautifulSoup
        cleantext = BeautifulSoup(self.post.content, "lxml").text
        print(cleantext)
        Notification.objects.create(user=self.post.user,text=f"{self.loved_by} sent ❤️ to your post '{cleantext[:40]}'")
        super(PostReact, self).save(*args, **kwargs)
    
    def __str__(self):
            return self.post.username + " Post loved by " + self.loved_by.username
            # return self.post. + " Post "
    

class PostImage(models.Model):
    
    image = models.ImageField(upload_to='PostImages/')

    # def __str__(self):
    #     return self.post.content
    
class Notification(models.Model):
    text = models.CharField(max_length=500)
    seen = models.BooleanField(default=0)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.text + "Post Creator-" + self.user.username
    

class SleepTime(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, auto_now_add=False)
    sleep_time = models.TimeField(auto_now=False, auto_now_add=False)
    wake_time = models.TimeField( auto_now=False, auto_now_add=False)
    total_sleep_hour = models.CharField( max_length=50,blank=True)
    total_sleep_min = models.CharField( max_length=50,blank=True)
    
    
    # def save(self, *args, **kwargs):
    #     import datetime as dt
    #     start=self.sleep_time
    #     end=self.wake_time
    #     start_dt = dt.datetime.strptime(str(start), '%H:%M:%S')
    #     end_dt = dt.datetime.strptime(str(end), '%H:%M:%S')
    #     diff = (end_dt - start_dt) 
    #     print(diff)
    #     # print(str(diff).split(" "))
    #     # hour,min,sec = str(diff).split(" ")[2].split(":")
    #     hour,min,sec = str(diff).split(":")
    #     print(hour,min,sec)
    #     # diff.seconds/60 
    #     # print(diff)
    #     self.wake_time = hour;
        
    #     super(SleepTime, self).save(*args, **kwargs)
    
    