from django.urls import path

from .views import ProfileListView, ProfileDetailView, UserDetailView

urlpatterns = [
    path('profiles/', ProfileListView.as_view()),
    path('profiles/detail/', ProfileDetailView.as_view()),
    path('accounts/detail/', UserDetailView.as_view()),
]
