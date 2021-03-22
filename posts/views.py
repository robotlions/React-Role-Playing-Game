
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

import tweepy as tweepy
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Post

@api_view(['POST'])
def tweet_post(request):
    
    }

    auth = tweepy.OAuthHandler(
        twitter_auth_keys['consumer_key'],
        twitter_auth_keys['consumer_secret']
    )
    auth.set_access_token(
        twitter_auth_keys['access_token'],
        twitter_auth_keys['access_token_secret']
    )
    api = tweepy.API(auth)

    # import pdb; pdb.set_trace()
    tweet = request.data.get('title')

    try:
        api.update_status(tweet)
    except tweepy.TweepError as error:
        if error.api_code == 187:
            print('duplicate message')

    return Response("You tweeted")
