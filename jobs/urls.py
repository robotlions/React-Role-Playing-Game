from django.urls import path

from .views import JobListAPIView, JobRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('jobs/', JobListAPIView.as_view()),
    path('jobs/<int:pk>/', JobRetrieveUpdateDestroyAPIView.as_view())

]
