from django.urls import path
from .views import SalonView


urlpatterns = [
    path('list/', SalonView.as_view(), name='salon'),
]
