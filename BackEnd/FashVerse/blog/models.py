from unicodedata import category
from django.db import models
from django.contrib.auth.models import User

# Create your models here.



class News(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    image = models.FileField(blank=True,upload_to='NewsImages/')
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class NewsImage(models.Model):
    news = models.ForeignKey(News, default=None, on_delete=models.CASCADE)
    images = models.FileField(upload_to='NewsImages/')

    def __str__(self):
        return self.news.title
    
    
class Tools(models.Model):
    Category_choices = (
        ('Fashion','Fashion'),
        ('Fitness','Fitness'),
        ('Technology','Technology'),
        ('Daily','Daily'),
        ('Others','Others'),
        
    )
    user = models.ForeignKey(User,on_delete=models.CASCADE,)
    name = models.CharField(max_length=250)
    frontend_app_name = models.CharField(max_length=50)
    
    images = models.FileField(upload_to='Tools/')
    description = models.TextField()
    category = models.CharField(max_length=20,choices=Category_choices,default='Technology')
    
    def __str__(self):
        return self.name
    
    

    

#  image: "images/maggi.jpg",
#     name: "maggi",
#     category: "breakfast",
#     price: "12₹",
#     description:
