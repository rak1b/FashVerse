from django.urls import path,include
from users.views import ProfileViewSet,UserViewSet,GetUserInfo
from rest_framework.routers import DefaultRouter
from users.views import PostViewSet
router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'userinfo', GetUserInfo, basename='userInfo')
router.register(r'Profile', ProfileViewSet, basename='Profile')


urlpatterns = [
    path('api/', include(router.urls)),
]