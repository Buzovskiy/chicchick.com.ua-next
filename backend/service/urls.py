from django.urls import path

from .views import ServiceCategoryList, ServiceCategoryDetails


urlpatterns = [
    path('', ServiceCategoryList.as_view(), name='service-category-list'),
    path('<str:slug>/', ServiceCategoryDetails.as_view()),
]
