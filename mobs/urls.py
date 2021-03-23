from django.urls import path

from .views import MobListCreateAPIView

urlpatterns = [
    path('mobs/', MobListCreateAPIView.as_view()),

]
