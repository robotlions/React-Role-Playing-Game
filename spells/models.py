from django.db import models
from django.conf import settings

# Create your models here.
class Spell(models.Model):

    NONE = 'None'
    ELECTRICITY = 'Electricity'
    FIRE = 'Fire'
    WATER = 'Water'
    EARTH = 'Earth'
    FORCE = 'Force'
    SILVER = 'Silver'
    ANTIMAGIC = 'Antimagic'
    ACID = 'Acid'

    ELEMENT_CHOICES = [
        (NONE, 'None'),
        (ELECTRICITY, 'Electricity'),
        (FIRE, 'Fire'),
        (WATER, 'Water'),
        (EARTH, 'Earth'),
        (FORCE, 'Force'),
        (SILVER, 'Silver'),
        (ANTIMAGIC, 'Antimagic'),
        (ACID, 'Acid'),
    ]

    name = models.CharField(max_length=255, null=True)
    desc = models.TextField(null=True, blank=True)
    level = models.IntegerField(null=True, blank=True)
    damageLow = models.IntegerField(null=True, blank=True)
    damageHigh = models.IntegerField(null=True, blank=True)
    spCost = models.IntegerField(null=True, blank=True)
    damMessage = models.CharField(max_length=255, null=True)
    combat = models.BooleanField(null=True)
    element = models.CharField(
        max_length=15,
        choices=ELEMENT_CHOICES,
        default=NONE, null=True, blank=True)

    def __str__(self):
        return (self.name)
