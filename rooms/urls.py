from django.urls import path

from .views import RoomListCreateAPIView

urlpatterns = [
    path('rooms/', RoomListCreateAPIView.as_view()),

]
