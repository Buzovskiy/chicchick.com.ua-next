from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings
from django_ckeditor_5.fields import CKEditor5Field

from backend.utils import post_delete_image, pre_save_image


class FAQ(models.Model):
    question = models.CharField(max_length=255, blank=False, null=False)
    answer = CKEditor5Field(blank=False, null=False)
    icon = models.ImageField(upload_to='faq-icons/', blank=True, null=True)

    objects = models.Manager()

    @property
    def get_absolute_image_url(self):
        try:
            return "{0}{1}".format(settings.BASE_URL, self.icon.url)
        except ValueError:
            return ''

    def __str__(self):
        return self.question


@receiver(post_delete, sender=FAQ)
def delete_image(sender, instance, *args, **kwargs):
    post_delete_image(sender, instance, field_name='photo', *args, **kwargs)


@receiver(pre_save, sender=FAQ)
def save_image(sender, instance, *args, **kwargs):
    pre_save_image(sender, instance, field_name='icon', *args, **kwargs)

