from django.contrib import admin
from .models import FaceShapeFind
# Register your models here.
	
from django.contrib import admin
 
 
@admin.register(FaceShapeFind)
class FaceShapeAdmin(admin.ModelAdmin):
 
    class Meta:
       model = FaceShapeFind
