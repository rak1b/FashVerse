from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import News, NewsImage, Tools


# from django.contrib.auth import get_user_model
# User = get_user_model()

# class UserSerializer(ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = User
#         fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )

        return user

    class Meta:
        model = User
        fields = ("id", "username", 'email', "password", )


class UserInfoSerializer(ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'


class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        ordering='added'

        # ordering_fields = (
        #     'added',
        # )


class NewsImageSerializer(ModelSerializer):
    class Meta:
        model = NewsImage
        fields = ("news", "images", )


class ToolsSerializer(ModelSerializer):
    class Meta:
        model = Tools
        fields = '__all__'
        # fields = ("id","user","name","images","category", "description")