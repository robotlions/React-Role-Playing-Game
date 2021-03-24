from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Spell
from .serializers import SpellSerializer

# Create your views here.
class SpellListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = SpellSerializer
    queryset = Spell.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
