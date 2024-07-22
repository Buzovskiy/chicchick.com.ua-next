from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from .serializers import MetaTagSerializer
from .models import MetaTag


class MetaTagDetails(APIView):
    """
    http://127.0.0.1:8000/meta-tags/<str:slug>/
    """
    def get(self, request, slug, format=None):
        """
        Return meta tag by code.
        """
        try:
            qs = MetaTag.objects.filter(slug=slug).get()
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = MetaTagSerializer(qs)
        return Response(serializer.data)
