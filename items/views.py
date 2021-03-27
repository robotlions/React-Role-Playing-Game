from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Item
from .serializers import ItemSerializer

# Create your views here.
class ItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ItemRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
