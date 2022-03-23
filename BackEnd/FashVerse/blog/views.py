from django import views
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
from django.shortcuts import get_object_or_404
from .serializers import ToolsSerializer, UserSerializer,UserInfoSerializer,NewsSerializer,NewsImageSerializer
from rest_framework import viewsets
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
from .models import News,NewsImage, Tools
from rest_framework.authtoken.models import Token


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
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)

class GetUserInfo(viewsets.ViewSet):
    """
    A simple ViewSet for getting logged in user info.
    """
    # def list(self, request):
    #     # queryset = Token.objects.get(key=pk)
        
    #     queryset = Token.objects.all()
    #     serializer = UserInfoSerializer(queryset, many=True)
    #     return Response(serializer.data)
    
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
    

from .models import Tools
class ToolsViewset(ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    
    def list(self, request):
        categories=[cat[0] for cat in Tools.Category_choices]
        queryset = Tools.objects.all()
        # print(Tools.Category_choices)
        # print(categories)
        serializer = ToolsSerializer(queryset, many=True)
        return Response({
            'data':serializer.data,
            'categories':categories
        })

    def retrieve(self, request, pk=None):
        queryset = Tools.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ToolsSerializer(user)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = ToolsSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'Created'},status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)