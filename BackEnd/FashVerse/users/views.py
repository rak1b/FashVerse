

from .serializers import ProfileSerializer,PostSerializer,UserSerializer
from rest_framework import viewsets
from .models import Post, Profile
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404


class UserViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            # username = serializer.validated_data['username']
            # email = serializer.validated_data['email']
            # password = serializer.validated_data['password']
            # user = User.objects.create_user(user=username,email=email,password=password)

            # token, created = Token.objects.get_or_create(user=user)
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)

class GetUserInfo(viewsets.ViewSet):
    """
    A simple ViewSet for getting logged in user info.
    """
    
    def retrieve(self, request,pk=None):
        try:
            queryset = Token.objects.get(key=pk)
            return Response({
            'username':queryset.user.username,
            'email':queryset.user.email,
             
        })
        except Exception as e:
            return Response('Invalid Token')
            
            
        # serializer = UserInfoSerializer(queryset, many=True)
        # return Response(serializer.data.user.username)
       
    
class NewsViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = News.objects.all().order_by('-added')
        serializer = NewsSerializer(queryset, many=True)
        return Response(serializer.data)

class NewsImageViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = NewsImage.objects.all()
        serializer = NewsImageSerializer(queryset, many=True)
        return Response(serializer.data)
    

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
        # print(userInfo.user)
        profile = Profile.objects.get(user=userInfo.user)
        userDetails = User.objects.get(id=userInfo.user.id)
        details = {
            'fname':userDetails.first_name,
            'lname':userDetails.last_name,
            'full_name':userDetails.first_name +" " +userDetails.last_name,
            'username':userDetails.username,
            'email':userDetails.email,}
        print(details)
        # profile = Profile.objects.get(user=User.objects.get(username=userInfo.username))
        serializer = ProfileSerializer(profile)
        # print(serializer.data.Dp)
        
        return Response({
            'data':serializer.data,
            'details':details},status=status.HTTP_200_OK)
    

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
        serializer = PostSerializer(data={'user':request.data['user'],
                                          'content':f'''{request.data['content']}'''
                                          })
        
        print(f'''{request.data['content']}''')
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)