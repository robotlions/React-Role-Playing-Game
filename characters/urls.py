from django.urls import path, include

from .views import CharacterListView, CharacterUpdateAPIView, CharacterCreateAPIView


app_name = 'characters'

urlpatterns = [

    path('characters/', CharacterListView.as_view()),
    path('characters/save/<int:pk>/', CharacterUpdateAPIView.as_view()),
    path('characters/create/', CharacterCreateAPIView.as_view())
    ]
