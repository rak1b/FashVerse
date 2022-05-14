from django.urls import path,include
from .views import NewsViewSet,NewsImageViewSet,ToolsViewset
from users.views import ProfileViewSet
from rest_framework.routers import DefaultRouter
from users.views import PostViewSet,PostImageViewset,PostReactViewSet,NotificationViewSet,SearchTimeViewSet,SleepTimeViewSet
from Facial_classification.views import FaceShapeViewset

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'postImage', PostImageViewset, basename='postImage')
router.register(r'NewsImage', NewsImageViewSet, basename='NewsImage')
router.register(r'News', NewsViewSet, basename='News')
router.register(r'Profile', ProfileViewSet, basename='Profile')
router.register(r'React', PostReactViewSet, basename='react')
router.register(r'Notifications', NotificationViewSet, basename='notifications')
router.register(r'SleepTime', SleepTimeViewSet, basename='sleepTime')
router.register(r'search', SearchTimeViewSet, basename='search')
# router.register(r'Profile/<str:username>', ProfileViewSet, basename='Profile')
router.register(r'face-shape', FaceShapeViewset, basename='FaceShape')
router.register(r'Tools', ToolsViewset, basename='Tools')
router.register(r'Tools', ToolsViewset, basename='Tools')


urlpatterns = [
    path('api/', include(router.urls)),
]