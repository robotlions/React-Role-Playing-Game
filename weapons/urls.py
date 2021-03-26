from django.urls import path

from .views import WeaponListCreateAPIView

urlpatterns = [
    path('weapons/', WeaponListCreateAPIView.as_view()),

]
