from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from .models import ServiceCategory
from .serializers import ServiceCategorySerializer


class ServiceCategoryList(APIView):
    """
    http://127.0.0.1:8000/services/
    """
    def get(self, request, format=None):
        """
        Return a list of all service categories.
        """
        qs = ServiceCategory.objects.all().prefetch_related('service_set')
        serializer = ServiceCategorySerializer(qs, many=True)
        return Response(serializer.data)


class ServiceCategoryDetails(APIView):
    """
    http://127.0.0.1:8000/services/<str:slug>/
    """
    def get(self, request, slug, format=None):
        """
        Return service category with the list of all services.
        """
        try:
            qs = ServiceCategory.objects.filter(slug=slug).prefetch_related('service_set').get()
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ServiceCategorySerializer(qs)
        return Response(serializer.data)
