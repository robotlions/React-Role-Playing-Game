from django.urls import path

from .views import SpellListAPIView

urlpatterns = [
    path('spells/', SpellListAPIView.as_view()),

]
