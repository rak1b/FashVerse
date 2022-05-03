# from .models import Articles
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

from .models import Profile,Post,PostImage
# class HomeSerializer(ModelSerializer):
#     class Meta:
#         model = Articles
#         fields = ('id','title','content')
        
            
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password')
    
    def create(self, validated_data):
        
        user = User.objects.create_user(**validated_data)
        if user:
            Profile.objects.create(user=user)
        print(Token.objects.create(user=user))
        return user
      

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('user','content')
        # fields = ('__all__')
        
class PostImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = ('__all__')
        
    def create(self, validated_data):
        return PostImage.objects.create(**validated_data)

        
    
    # def create(self, validated_data):
    #     post = Post.objects.create(User=validated_data['user'],content=validated_data['content'])
    #     return post
    
class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('__all__')
        