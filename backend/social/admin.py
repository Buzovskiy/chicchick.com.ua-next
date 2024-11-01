from django.contrib import admin
from .models import Social
from django.utils.translation import gettext_lazy as _


@admin.register(Social)
class SocialAdmin(admin.ModelAdmin):
    # list_display = ('image_preview',)
    readonly_fields = ['image_preview']

    @admin.display(description=_('Icon'))
    def image_preview(self, obj):
        return obj.image_preview
