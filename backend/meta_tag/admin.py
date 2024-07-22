from django.contrib import admin
from .models import MetaTag


@admin.register(MetaTag)
class MetaTagAdmin(admin.ModelAdmin):
    list_display = ('id', 'page_title', 'slug', 'meta_title')
    list_display_links = ('id', 'page_title')
