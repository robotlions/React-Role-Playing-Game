from django.urls import path

from .views import ItemListCreateAPIView, ItemRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('items/', ItemListCreateAPIView.as_view()),
    path('items/<int:pk>/', ItemRetrieveUpdateDestroyAPIView.as_view())

]
