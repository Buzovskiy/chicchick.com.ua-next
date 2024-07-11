from django.conf import settings
from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.utils.html import mark_safe
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
from django.dispatch import receiver

from backend.utils import post_delete_image, pre_save_image


class ServiceCategory(models.Model):
    title = models.CharField(_('Title'), max_length=100)
    image = models.ImageField(_('Image'), upload_to='images/service')
    slug = models.SlugField(
        'Url', max_length=100, unique=True, blank=True,
        help_text=_('Leave blank to be populated automatically'),
    )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

    class Meta:
        verbose_name = _('Category of a service')
        verbose_name_plural = _('Categories of a service')

    @property
    def get_absolute_image_url(self):
        try:
            return "{0}{1}".format(settings.BASE_URL, self.image.url)
        except ValueError:
            return ''

    @property
    def image_preview(self):
        if self.image:
            return mark_safe('<img src="{url}" height="200px" />'.format(url=self.image.url))
        return ""


@receiver(post_delete, sender=ServiceCategory)
def delete_image(sender, instance, *args, **kwargs):
    post_delete_image(sender, instance, field_name='image', *args, **kwargs)


@receiver(pre_save, sender=ServiceCategory)
def save_image(sender, instance, *args, **kwargs):
    pre_save_image(sender, instance, field_name='image', *args, **kwargs)
