# Generated by Django 4.0.3 on 2022-04-30 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_remove_postimage_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postimage',
            name='images',
            field=models.ImageField(upload_to='PostImages/'),
        ),
    ]
