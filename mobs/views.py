from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Mob
from .serializers import MobSerializer

# Create your views here.
class MobListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = MobSerializer
    queryset = Mob.objects.all()

class MobCreateAPIView(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = MobSerializer
    queryset = Mob.objects.all()

class MobRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = MobSerializer
    queryset = Mob.objects.all()
