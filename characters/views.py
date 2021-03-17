
from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Character
from .serializers import CharacterSerializer


# Create your views here.
class CharacterListView(generics.ListAPIView):
    # queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    def get_queryset(self):
        queryset = Character.objects.all()
        queryset = queryset.filter(user=self.request.user)
        return queryset

class CharacterUpdateAPIView(generics.UpdateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    # def get_object(self):
    #     return self.request.user

class CharacterCreateAPIView(generics.CreateAPIView):
    # queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CharacterRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    # def get_queryset(self):
    #     queryset = Character.objects.all()
    #     queryset = queryset.filter(user=self.request.user)
    #     return queryset
    # def get_object(self):
    #     return self.request.user
