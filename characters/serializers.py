from rest_framework import serializers

from .models import Character

class CharacterSerializer(serializers.ModelSerializer):
    pass

    class Meta:
        model = Character
        fields = '__all__'
