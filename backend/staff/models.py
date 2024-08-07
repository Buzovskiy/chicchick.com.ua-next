from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings

from backend.utils import post_delete_image, pre_save_image


class Staff(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="staff/", null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    objects = models.Manager()

    @property
    def get_absolute_image_url(self):
        try:
            return "{0}{1}".format(settings.BASE_URL, self.photo.url)
        except ValueError:
            return ''

    def __str__(self):
        return self.name


@receiver(post_delete, sender=Staff)
def delete_image(sender, instance, *args, **kwargs):
    post_delete_image(sender, instance, field_name='photo', *args, **kwargs)


@receiver(pre_save, sender=Staff)
def save_image(sender, instance, *args, **kwargs):
    pre_save_image(sender, instance, field_name='photo', *args, **kwargs)
