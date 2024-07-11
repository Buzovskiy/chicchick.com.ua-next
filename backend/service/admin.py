from django.contrib import admin
from .models import ServiceCategory
from django.utils.translation import gettext_lazy as _


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'slug', 'image_preview')
    readonly_fields = ['image_preview']

    @admin.display(description=_('Image'))
    def image_preview(self, obj):
        return obj.image_preview
