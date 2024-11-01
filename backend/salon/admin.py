from django.contrib import admin
from .models import Salon, Day, SalonPhone, Settings


class DayInline(admin.TabularInline):
    model = Day
    extra = 0
    classes = ['collapse']


class SalonPhoneInline(admin.TabularInline):
    model = SalonPhone
    extra = 0


@admin.register(Salon)
class SalonAdmin(admin.ModelAdmin):
    inlines = [SalonPhoneInline, DayInline]


@admin.register(Settings)
class SettingsAdmin(admin.ModelAdmin):
    list_display = ['title', 'key', 'value']
