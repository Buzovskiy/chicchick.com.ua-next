from rest_framework import serializers
from .models import Staff


class StaffSerializer(serializers.ModelSerializer):
    imageUrl = serializers.ReadOnlyField(source='get_absolute_image_url')

    class Meta:
        model = Staff
        fields = ('name', 'imageUrl', 'description')
