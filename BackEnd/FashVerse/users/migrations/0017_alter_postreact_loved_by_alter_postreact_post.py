# Generated by Django 4.0.3 on 2022-05-12 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_remove_postreact_loved_by_postreact_loved_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postreact',
            name='loved_by',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='postreact',
            name='post',
            field=models.CharField(max_length=10),
        ),
    ]
