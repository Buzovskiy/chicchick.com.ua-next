from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Salon, Day
from .serializers import SalonSerializer


class SalonView(APIView):
    """
    http://127.0.0.1:8000/salon/list/
    """
    def get(self, request):
        salons = Salon.objects.prefetch_related('day_set').\
            prefetch_related('day_set__schedule').all()
        salon_serializer = SalonSerializer(salons, many=True)
        return Response(salon_serializer.data)
