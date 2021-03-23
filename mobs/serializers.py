from rest_framework import serializers

from .models import Mob

class MobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mob
        fields = '__all__'
