# Generated by Django 5.0.6 on 2024-08-11 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salon', '0001_initial'),
        ('staff', '0003_alter_staff_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='day',
            name='schedule',
            field=models.ManyToManyField(to='staff.staff'),
        ),
    ]