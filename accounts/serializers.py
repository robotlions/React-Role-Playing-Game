from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_auth.models import TokenModel

from .models import Profile

User = get_user_model()




class ProfileSerializer(serializers.ModelSerializer):
        user = serializers.ReadOnlyField(source='user.username')
        date = serializers.ReadOnlyField(source='user.date_joined')

        class Meta:
            model = Profile
            fields = '__all__'


class TokenSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    date_joined = serializers.ReadOnlyField(source='user.date_joined')

    class Meta:
        model = TokenModel
        fields = ('key', 'username', 'date_joined')


class UserDetailSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False, read_only=True)
    # profile = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = User
        fields = ('username', 'date_joined', 'profile', 'character')
        depth=1
