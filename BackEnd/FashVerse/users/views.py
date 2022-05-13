

import re
from .serializers import PostImageSerializer, ProfileSerializer,PostSerializer,UserSerializer,PostReactSerializer,NotificationSerializer,SleepTimeSerializer
from rest_framework import viewsets
from .models import Notification, Post, PostImage, PostReact, Profile,SleepTime
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.db.models import Q

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
        try:
            userInfo = Token.objects.get(key=pk)
        # print(userInfo.user)
            profile = Profile.objects.get(user=userInfo.user)
            userDetails = User.objects.get(id=userInfo.user.id)
        except:
        # print(userInfo.user)
            userDetails = User.objects.get(username=pk)
            profile = Profile.objects.get(user=userDetails)
            
            
        details = {
            'fname':userDetails.first_name,
            'lname':userDetails.last_name,
            'full_name':userDetails.first_name +" " +userDetails.last_name,
            'username':userDetails.username,
            'email':userDetails.email,
            }
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
        queryset = Post.objects.order_by('-created')
        serializer = PostSerializer(queryset, many=True)
        
    
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        
        if(pk[-1]=='_'):
            
            user = User.objects.get(username=str(pk)[:-1])
            queryset = Post.objects.filter(~Q(user = user)).order_by('-created')
            react = PostReact.objects.filter(~Q(post__user = user))
        else:
            user = User.objects.get(username=pk)
            queryset = Post.objects.filter(user=user).order_by('-created')
            react = PostReact.objects.filter(post__user = user)
            
        serializer = PostSerializer(queryset, many=True)
        # res = {
        #     'data':serializer.data,
        #     'react':{
        #         'post':react.post,
        #         'love':react.love,
        #         'loved_by':react.loved_by
        #     }
            
        # }
        # print(res)
        # return Response(res)
        # print(react.love) have to use for loop
        return Response(serializer.data)
    
    def create(self, request):
        

        serializer = PostSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    
        
    
class PostImageViewset(viewsets.ViewSet):
    """
    A simple ViewSet for post's image.
    """
    def list(self, request):
        queryset = PostImage.objects.all()
        serializer = PostImageSerializer(queryset, many=True)
        return Response(serializer.data)

   
    def create(self, request):
        
      serializer = PostImageSerializer(data=request.data)
      data=request.data
      recieved_image_name = str(data['image'])
      print(str(data['image']))
      # cv2.imshow(data['face'])
      if serializer.is_valid():
         serializer.save()
         image_path = 'media/PostImages/'+recieved_image_name
         print(image_path)
         # image = cv2.imread(image_path,0)
         print({'url':image_path,"data":"created"})
         return Response({'url':image_path,"status":'created'},status=status.HTTP_201_CREATED)
      return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        
class NotificationViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for Notification.
    """
    def list(self, request):
        queryset = Notification.objects.all()
        serializer = NotificationSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self,request,pk=None):
       
        try:
            user = User.objects.get(username=pk)
        except:
            user = User.objects.get(id=pk)
            
        queryset = Notification.objects.filter(user=user)
        # queryset = Post.objects.filter(user=user)s.order_by('-created')
        
        serializer = NotificationSerializer(queryset, many=True)
        return Response(serializer.data)
    
    
    
class PostReactViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    # queryset = PostReact.objects.all()
    # serializer_class = PostReactSerializer
    
    def list(self, request):
        queryset = PostReact.objects.all()
        serializer = PostReactSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        post = Post.objects.get(id=request.data['post'])
        loved_by = User.objects.get(username = request.data['loved_by'])
        newdata = {
            'post':post.id,
            'love':request.data['love'],
            'loved_by':loved_by.id,
        }
        
        serializer = PostReactSerializer(data = newdata)
        try:
            exists_or_not = PostReact.objects.get(post=post.id,loved_by=loved_by)
            return Response({'data':'already exists'})
            
        except:
            if serializer.is_valid():
                serializer.save()
                return Response({'data':'Created'},status=status.HTTP_201_CREATED)
            return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        
        


class SleepTimeViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    # queryset = PostReact.objects.all()
    # serializer_class = PostReactSerializer
    
    def list(self, request):
        queryset = SleepTime.objects.all()
        serializer = SleepTimeSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        user = User.objects.get(username = request.data['username'])
        print(user.id)
        print("-----------------------------")
        info = SleepTime.objects.filter(user=user.id)
        
        import datetime as dt
        sleep_time = request.data['sleep_time']+":00"
        wake_time = request.data['wake_time']+":00"
        start_dt = dt.datetime.strptime(str(sleep_time), '%H:%M:%S')
        end_dt = dt.datetime.strptime(str(wake_time), '%H:%M:%S')
        diff = (end_dt - start_dt) 
        print(diff)
        try:
            hour,min,sec = str(diff).split(" ")[2].split(":")
        except:
            hour,min,sec = str(diff).split(":")
        print(hour)
        print(min)
        
       
        newdata = {
            'user':user.id,
            'date':request.data['date'],
            'sleep_time':sleep_time,
            'wake_time':wake_time,
            'total_sleep_hour':hour,
            'total_sleep_min':min,
            
        }
        
        serializer = SleepTimeSerializer(data = newdata)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self,request,pk=None):
           
        try:
            user = User.objects.get(username=pk)
        except:
            user = User.objects.get(id=pk)
            
        queryset = SleepTime.objects.filter(user=user).order_by('-date')
        # queryset = Post.objects.filter(user=user)s.order_by('-created')
        
        serializer = SleepTimeSerializer(queryset, many=True)
        return Response(serializer.data)