from django.db import models
from django.conf import settings

# Create your models here.
class Room(models.Model):

    name = models.CharField(max_length=255, null=True)
    desc = models.TextField(null=True)
    north = models.IntegerField(null=True, blank=True)
    south = models.IntegerField(null=True, blank=True)
    east = models.IntegerField(null=True, blank=True)
    west = models.IntegerField(null=True, blank=True)
    up = models.IntegerField(null=True, blank=True)
    down = models.IntegerField(null=True, blank=True)
    lit = models.BooleanField(null=True)
    area = models.CharField(max_length=255, null=True)
    danger = models.BooleanField(null=True)
    static = models.ImageField(upload_to='rooms/', null=True, blank=True)
    walk = models.ImageField(upload_to='rooms/', null=True, blank=True)

    def __str__(self):
        return (self.id, self.name)
