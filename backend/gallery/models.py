from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings
from django.utils.html import mark_safe

from backend.utils import post_delete_image, pre_save_image


class Gallery(models.Model):
    photo = models.ImageField(upload_to="gallery/", null=False, blank=False)

    objects = models.Manager()

    @property
    def get_absolute_image_url(self):
        try:
            return "{0}{1}".format(settings.BASE_URL, self.photo.url)
        except ValueError:
            return ''

    @property
    def image_preview(self):
        if self.photo:
            return mark_safe('<img src="{url}" height="200px" />'.format(url=self.photo.url))
        return ""


@receiver(post_delete, sender=Gallery)
def delete_image(sender, instance, *args, **kwargs):
    post_delete_image(sender, instance, field_name='photo', *args, **kwargs)


@receiver(pre_save, sender=Gallery)
def save_image(sender, instance, *args, **kwargs):
    pre_save_image(sender, instance, field_name='photo', *args, **kwargs)
