from django.urls import path

from .views import ItemListCreateAPIView

urlpatterns = [
    path('items/', ItemListCreateAPIView.as_view()),

]
