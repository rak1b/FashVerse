from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.models import User
from users.models import PostImage

from users.models import Profile,Post


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


 

 
