from django.contrib import admin
from .models import Gallery
from django.utils.translation import gettext_lazy as _


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('image_preview',)
    readonly_fields = ['image_preview']

    @admin.display(description=_('Image'))
    def image_preview(self, obj):
        return obj.image_preview
