

import re
from .serializers import PostImageSerializer, ProfileSerializer,PostSerializer,UserSerializer,PostReactSerializer
from rest_framework import viewsets
from .models import Post, PostImage, PostReact, Profile
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
        user = User.objects.get(username=pk)
        queryset = Post.objects.filter(user=user).order_by('-created')
        
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        

        serializer = PostSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    
    # def partial_update(self, request, pk=None):
    #     post = Post.objects.get(id=pk)
    #     data  = request.data['user']
        
    #     return Response('')
        
    
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
        # Response { type: "cors", url: "https://noteyard-backend.herokuapp.com/api/blogs/uploadImg", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, body: ReadableStream, bodyUsed: false }

# {
#     "love": false,
#     "post": 47,
#     "loved_by": ['rak1b']
# }
        
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
        # data=request.data
        print('creating................')
        print(request.data)
        print(request)
        
        newdata = {
            'post':Post.objects.get(id=request.data['post']),
            'love':request.data['love'],
            'loved_by':User.objects.get(username = request.data['username'])
        }
        # serializer = PostSerializer(data = newdata)
        serializer = PostSerializer(data = request.data)
        
        if serializer.is_valid():
            # serializer.save()
            print('valid')
            print(request.data)
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)