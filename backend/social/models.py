from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.utils.html import mark_safe

from backend.utils import post_delete_image, pre_save_image


class Social(models.Model):
    title = models.CharField(max_length=200, null=False, blank=False)
    link = models.CharField(max_length=250, null=False, blank=False)
    image = models.FileField(upload_to='social', null=False, blank=False)
    active = models.BooleanField(default=True)

    objects = models.Manager()

    @property
    def get_absolute_image_url(self):
        try:
            return "{0}{1}".format(settings.BASE_URL, self.image.url)
        except ValueError:
            return ''

    @property
    def image_preview(self):
        if self.image:
            return mark_safe('<img src="{url}" height="30px" />'.format(url=self.image.url))
        return ""

    def __str__(self):
        return self.title


@receiver(post_delete, sender=Social)
def delete_image(sender, instance, *args, **kwargs):
    post_delete_image(sender, instance, field_name='photo', *args, **kwargs)


@receiver(pre_save, sender=Social)
def save_image(sender, instance, *args, **kwargs):
    pre_save_image(sender, instance, field_name='icon', *args, **kwargs)
