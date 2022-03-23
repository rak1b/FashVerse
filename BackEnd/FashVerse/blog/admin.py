from django.contrib import admin
from .models import News,NewsImage, Tools
# Register your models here.
	
from django.contrib import admin
 
from .models import News, NewsImage
 
class NewsImageAdmin(admin.StackedInline):
    model = NewsImage
 
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    inlines = [NewsImageAdmin]
 
    class Meta:
       model = News
 
@admin.register(NewsImage)
class NewsImageAdmin(admin.ModelAdmin):
    pass


@admin.register(Tools)
class ToolsAdmin(admin.ModelAdmin):
    pass