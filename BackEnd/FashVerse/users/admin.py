from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.models import User
from users.models import PostImage

from users.models import Profile,Post,PostReact,Notification,SleepTime


# Register your models here.

@admin.register(Profile)
class UserProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(Post)
class UserPostAdmin(admin.ModelAdmin):
    pass

@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    pass

@admin.register(PostReact)
class PostReactAdmin(admin.ModelAdmin):
    pass

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    pass

@admin.register(SleepTime)
class SleepTimeAdmin(admin.ModelAdmin):
    pass







 

 
