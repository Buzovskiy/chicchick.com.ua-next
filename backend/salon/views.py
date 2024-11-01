from django.core import cache
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import Salon, Settings
from .serializers import SalonSerializer, SettingsSerializer


class SalonView(APIView):
    """
    http://127.0.0.1:8000/salon/list/
    """
    def get(self, request):
        salons = Salon.objects.prefetch_related('day_set').\
            prefetch_related('day_set__schedule').\
            prefetch_related('salonphone_set').all()
        salon_serializer = SalonSerializer(salons, many=True)
        return Response(salon_serializer.data)


class SettingsDetailsView(RetrieveAPIView):
    """
    http://127.0.0.1:8000/salon/settings/<str:key>/
    """
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
    lookup_field = 'key'


class SettingsListView(APIView):
    """
    http://127.0.0.1:8000/salon/settings?keys=key1,key2
    """

    def get(self, request):
        # Get the list of keys from the query parameters, split by commas
        keys_param = request.query_params.get('keys', None)

        # Validate that keys are provided
        if not keys_param:
            return Response(
                {"error": "Please provide a list of keys in the query parameter."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Convert the comma-separated keys to a list
        keys = keys_param.split(',')

        settings = Settings.objects.filter(key__in=keys)
        # Serialize the queryset
        serializer = SettingsSerializer(settings, many=True)
        # Transform serialized data into a dictionary
        settings_dict = {item['key']: item['value'] for item in serializer.data}

        return Response(settings_dict)
