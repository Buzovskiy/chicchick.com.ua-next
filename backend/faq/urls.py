from django.urls import path
from rest_framework import generics
from .serializers import FAQSerializer
from .models import FAQ


urlpatterns = [path('', generics.ListAPIView.as_view(
    queryset=FAQ.objects.all(), serializer_class=FAQSerializer), name='faqs')]
