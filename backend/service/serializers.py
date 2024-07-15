from rest_framework import serializers

from .models import ServiceCategory, Service


class ServiceSerializer(serializers.ModelSerializer):
    imageUrl = serializers.ReadOnlyField(source='get_absolute_image_url')

    class Meta:
        model = Service
        fields = ['title', 'imageUrl', 'description', 'price']


class ServiceCategorySerializer(serializers.ModelSerializer):
    imageUrl = serializers.ReadOnlyField(source='get_absolute_image_url')
    services = ServiceSerializer(source='service_set', many=True, read_only=True)

    @staticmethod
    def get_image_url(obj):
        return obj.get_absolute_image_url

    class Meta:
        model = ServiceCategory
        fields = ['id', 'title', 'slug', 'imageUrl', 'services']
