from rest_framework import serializers
from .models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    src = serializers.SerializerMethodField(method_name='get_src')

    class Meta:
        model = Gallery
        fields = ('id', 'src',)

    @staticmethod
    def get_src(obj):
        return obj.get_absolute_image_url
