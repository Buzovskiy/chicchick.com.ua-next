# Generated by Django 5.0.6 on 2024-07-18 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='price',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Price'),
        ),
    ]
