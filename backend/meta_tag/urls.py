from django.urls import path

from .views import MetaTagDetails


urlpatterns = [
    path('<str:slug>/', MetaTagDetails.as_view()),
]
