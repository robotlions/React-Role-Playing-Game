from django.urls import path

from .views import SpellListCreateAPIView

urlpatterns = [
    path('spells/', SpellListCreateAPIView.as_view()),

]
