from django.db import models

# Create your models here.
from django.contrib.auth.models import User
# Create your models here.
class FaceShapeFind(models.Model):
    # user = models.ForeignKey(
    #     User,
    #     on_delete=models.CASCADE,
    # )
    face = models.ImageField(upload_to='FaceShape/')