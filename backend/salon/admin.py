from django.contrib import admin
from .models import Salon, Day


class DayInline(admin.TabularInline):
    model = Day
    extra = 0


@admin.register(Salon)
class SalonAdmin(admin.ModelAdmin):
    inlines = [DayInline]
