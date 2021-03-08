from django.urls import path, include

from .views import CharacterListView, CharacterUpdateAPIView


app_name = 'characters'

urlpatterns = [

    path('characters/', CharacterListView.as_view()),
    path('characters/save/<int:pk>/', CharacterUpdateAPIView.as_view()),
    ]
