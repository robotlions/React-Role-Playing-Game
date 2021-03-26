from django.urls import path

from .views import RoomListCreateAPIView, RoomRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('rooms/', RoomListCreateAPIView.as_view()),
    path('rooms/<int:pk>/', RoomRetrieveUpdateDestroyAPIView.as_view())
]
