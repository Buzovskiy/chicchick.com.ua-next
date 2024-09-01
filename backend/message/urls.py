from django.urls import path
from .views import Message


urlpatterns = [
    path('send/', Message.as_view()),
]
