from django.db import models
from django.conf import settings

# Create your models here.
class Mob(models.Model):


    NONE = 'None'
    ELECTRICITY = 'Electricity'
    FIRE = 'Fire'
    WATER = 'Water'
    EARTH = 'Earth'
    FORCE = 'Force'
    SILVER = 'Silver'
    ANTIMAGIC = 'Antimagic'
    ACID = 'Acid'

    WEAKNESS_CHOICES = [
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
    desc = models.CharField(max_length=255, null=True, blank=True)
    damage = models.IntegerField(null=True, blank=True)
    attack = models.IntegerField(null=True, blank=True)
    hp = models.IntegerField(null=True)
    hpmax = models.IntegerField(null=True)
    sp = models.IntegerField(null=True, blank=True)
    spmax = models.IntegerField(null=True, blank=True)
    ac = models.IntegerField(null=True, blank=True)
    weapon = models.CharField(max_length=255, null=True, blank=True)
    damMessage = models.CharField(max_length=255, null=True, blank=True)
    xp = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='mobs/', null=True, blank=True)
    inventory = models.JSONField(null=True, default=dict, blank=True)
    silver = models.IntegerField(null=True, blank=True)
    isShopkeeper = models.BooleanField(null=True, default=False)
    weakness = models.CharField(
        max_length=15,
        choices=WEAKNESS_CHOICES,
        default=NONE, null=True)




    def __str__(self):
        return "# " + str(self.id) + " - " + self.name
