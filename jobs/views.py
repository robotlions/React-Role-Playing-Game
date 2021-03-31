from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Job
from .serializers import JobSerializer

# Create your views here.
class JobListAPIView(generics.ListAPIView):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class JobRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    permission_classes = [permissions.IsAdminUser]
