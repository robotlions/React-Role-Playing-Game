from rest_framework import serializers

from .models import Spell

class SpellSerializer(serializers.ModelSerializer):

    class Meta:
        model = Spell
        fields = '__all__'
