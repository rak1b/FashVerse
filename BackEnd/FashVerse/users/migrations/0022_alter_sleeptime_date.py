# Generated by Django 4.0.3 on 2022-05-12 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_sleeptime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sleeptime',
            name='date',
            field=models.DateField(),
        ),
    ]