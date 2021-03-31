from django.urls import path

from .views import WeaponListAPIView

urlpatterns = [
    path('weapons/', WeaponListAPIView.as_view()),

]
