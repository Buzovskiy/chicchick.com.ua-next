from django.urls import path
from .views import SalonView, SettingsDetailsView, SettingsListView


urlpatterns = [
    path('list/', SalonView.as_view(), name='salon'),
    path('settings/<str:key>', SettingsDetailsView.as_view()),
    path('settings/', SettingsListView.as_view()),
]
