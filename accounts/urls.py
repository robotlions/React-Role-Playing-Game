from django.urls import path

from .views import ProfileListView

urlpatterns = [
    path('profiles/', ProfileListView.as_view()),
]
