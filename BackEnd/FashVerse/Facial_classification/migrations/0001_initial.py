# Generated by Django 4.0.3 on 2022-03-30 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FaceShapeFind',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('face', models.ImageField(upload_to='FaceShape/')),
            ],
        ),
    ]
