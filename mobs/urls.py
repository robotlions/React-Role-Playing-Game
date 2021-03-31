from django.urls import path

from .views import MobCreateAPIView, MobListAPIView, MobRetrieveUpdateDestroyAPIView\

app_name = "mobs"

urlpatterns = [
    path('mobs/', MobListAPIView.as_view(), name="mob_list_api"),
    path('mobs/create/', MobCreateAPIView.as_view()),
    path('mobs/<int:pk>/', MobRetrieveUpdateDestroyAPIView.as_view()),

]
