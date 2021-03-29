from django.urls import path

from .views import MobListCreateAPIView, MobRetrieveUpdateDestroyAPIView\

app_name = "mobs"

urlpatterns = [
    path('mobs/', MobListCreateAPIView.as_view(), name="mob_list_api"),
    path('mobs/<int:pk>/', MobRetrieveUpdateDestroyAPIView.as_view()),

]
