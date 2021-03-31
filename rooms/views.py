from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Room
from .serializers import RoomSerializer

# Create your views here.

class RoomListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()


class RoomListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()

class RoomRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
