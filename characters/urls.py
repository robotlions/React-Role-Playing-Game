from django.urls import path, include

from .views import CharacterListView


app_name = 'characters'

urlpatterns = [

    path('characters/', CharacterListView.as_view()),
    ]
