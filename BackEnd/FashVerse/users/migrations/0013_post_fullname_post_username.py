# Generated by Django 4.0.3 on 2022-05-10 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_profile_bio'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='fullname',
            field=models.CharField(default='change this names later', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='username',
            field=models.CharField(default='change this names later', max_length=100),
            preserve_default=False,
        ),
    ]
