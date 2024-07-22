from rest_framework import serializers
from .models import MetaTag


class MetaTagSerializer(serializers.ModelSerializer):
    metaTitle = serializers.CharField(source='meta_title')
    metaDescription = serializers.CharField(source='meta_description')

    class Meta:
        model = MetaTag
        fields = ['id', 'metaTitle', 'metaDescription']
