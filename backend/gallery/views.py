from rest_framework import generics
from .models import Gallery
from .serializers import GallerySerializer


class GalleryList(generics.ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if 'limit' in self.request.query_params:
            limit = int(self.request.query_params['limit'])
            qs = qs[:limit]
        return qs
