from rest_framework import serializers
from .models import FAQ


class FAQSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source='get_absolute_image_url')

    class Meta:
        model = FAQ
        fields = ('id', 'question', 'answer', 'icon')
