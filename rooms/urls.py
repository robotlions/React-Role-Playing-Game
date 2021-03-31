from django.urls import path

from .views import RoomListCreateAPIView, RoomRetrieveUpdateDestroyAPIView, RoomListAPIView

urlpatterns = [
    path('rooms/', RoomListAPIView.as_view()),
    path('rooms/create/', RoomListCreateAPIView.as_view()),
    path('rooms/<int:pk>/', RoomRetrieveUpdateDestroyAPIView.as_view())
]
