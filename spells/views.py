from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Spell
from .serializers import SpellSerializer

# Create your views here.
class SpellListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = SpellSerializer
    queryset = Spell.objects.all()
