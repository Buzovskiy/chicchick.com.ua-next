from rest_framework import generics
from .models import Social
from .serializers import SocialSerializer


class SocialList(generics.ListAPIView):
    queryset = Social.objects.all()
    serializer_class = SocialSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(active=True)
