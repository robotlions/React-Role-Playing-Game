from django.urls import path

from .views import tweet_post

urlpatterns = [
    path('posts/', tweet_post)
]
