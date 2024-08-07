from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import StaffSerializer
from .models import Staff


class StaffList(APIView):
    """
    http://127.0.0.1:8000/staff/
    """
    def get(self, request, format=None):
        """
        Return a list of a staff.
        """
        qs = Staff.objects.all()
        serializer = StaffSerializer(qs, many=True)
        return Response(serializer.data)
