from django.urls import path,include
from .views import UserViewSet,GetUserInfo,NewsViewSet,NewsImageViewSet,ToolsViewset
from users.views import ProfileViewSet
from rest_framework.routers import DefaultRouter
from users.views import PostViewSet
from Facial_classification.views import FaceShapeViewset

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'posts', PostViewSet, basename='post')
router.register(r'userinfo', GetUserInfo, basename='userInfo')
router.register(r'NewsImage', NewsImageViewSet, basename='NewsImage')
router.register(r'News', NewsViewSet, basename='News')
router.register(r'Profile', ProfileViewSet, basename='Profile')
router.register(r'face-shape', FaceShapeViewset, basename='FaceShape')
router.register(r'Tools', ToolsViewset, basename='Tools')


urlpatterns = [
    path('api/', include(router.urls)),
]