from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Weapon
from .serializers import WeaponSerializer

# Create your views here.
class WeaponListAPIView(generics.ListAPIView):
    serializer_class = WeaponSerializer
    queryset = Weapon.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
