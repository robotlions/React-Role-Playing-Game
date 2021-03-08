
from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Character
from .serializers import CharacterSerializer


# Create your views here.
class CharacterListView(generics.ListAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
