from django.urls import path

from .views import JobListCreateAPIView, JobRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('jobs/', JobListCreateAPIView.as_view()),
    path('jobs/<int:pk>/', JobRetrieveUpdateDestroyAPIView.as_view())

]
