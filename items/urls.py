from django.urls import path

from .views import ItemCreateAPIView, ItemListAPIView, ItemRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('items/', ItemListAPIView.as_view()),
    path('items/create/', ItemCreateAPIView.as_view()),
    path('items/<int:pk>/', ItemRetrieveUpdateDestroyAPIView.as_view())

]
