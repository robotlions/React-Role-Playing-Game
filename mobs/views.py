from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Mob
from .serializers import MobSerializer

# Create your views here.
class MobListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = MobSerializer
    queryset = Mob.objects.all()
