# Generated by Django 4.0.3 on 2022-05-12 23:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0022_alter_sleeptime_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='sleeptime',
            name='user',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]