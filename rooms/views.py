from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Room
from .serializers import RoomSerializer

# Create your views here.
class RoomListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
