from django.urls import path
from .views import SocialList


urlpatterns = [
    path('', SocialList.as_view(), name='social-list'),
]
