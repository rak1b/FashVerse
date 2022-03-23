

from .serializers import ProfileSerializer,PostSerializer
from rest_framework import viewsets
from .models import Post, Profile
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404

class ProfileViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for Profile.
    """
    def list(self, request):
        queryset = Profile.objects.all()
        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self,request,pk=None):
        userInfo = Token.objects.get(key=pk)
        profile = Profile.objects.get(user=userInfo.user)
        # profile = Profile.objects.get(user=User.objects.get(username=userInfo.username))
        serializer = ProfileSerializer(profile)
        return Response({'data':serializer.data},status=status.HTTP_200_OK)
    

class PostViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Post.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(user)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = PostSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)