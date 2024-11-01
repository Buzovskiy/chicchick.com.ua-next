from rest_framework import serializers
from .models import Social


class SocialSerializer(serializers.ModelSerializer):
    iconUrl = serializers.SerializerMethodField(method_name='get_icon_url')

    class Meta:
        model = Social
        fields = ('id', 'title', 'link', 'iconUrl')

    @staticmethod
    def get_icon_url(obj):
        return obj.get_absolute_image_url
