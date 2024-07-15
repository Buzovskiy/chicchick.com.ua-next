from django.contrib import admin
from .models import ServiceCategory, Service
from django.utils.translation import gettext_lazy as _


class ServiceInline(admin.StackedInline):
    model = Service
    extra = 0
    readonly_fields = ['image_preview']

    @admin.display(description=_('Image'))
    def image_preview(self, obj):
        return obj.image_preview


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'slug')
    readonly_fields = ['image_preview']
    inlines = [ServiceInline]

    @admin.display(description=_('Image'))
    def image_preview(self, obj):
        return obj.image_preview
