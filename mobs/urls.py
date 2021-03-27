from django.urls import path

from .views import MobListCreateAPIView, MobRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('mobs/', MobListCreateAPIView.as_view()),
    path('mobs/<int:pk>/', MobRetrieveUpdateDestroyAPIView.as_view()),

]
