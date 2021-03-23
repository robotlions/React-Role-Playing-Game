from django.db import models
from django.conf import settings

# Create your models here.
class Mob(models.Model):


    NONE = 'None'
    FIRE = 'Fire'
    WATER = 'Water'
    EARTH = 'Earth'
    FORCE = 'Force'
    SILVER = 'Silver'
    ANTIMAGIC = 'Antimagic'
    ACID = 'Acid'

    WEAKNESS_CHOICES = [
        (NONE, 'None'),
        (FIRE, 'Fire'),
        (WATER, 'Water'),
        (EARTH, 'Earth'),
        (FORCE, 'Force'),
        (SILVER, 'Silver'),
        (ANTIMAGIC, 'Antimagic'),
        (ACID, 'Acid'),
    ]

    name = models.CharField(max_length=255, null=True)
    desc = models.CharField(max_length=255, null=True)
    damage = models.IntegerField(null=True)
    attack = models.IntegerField(null=True)
    hp = models.IntegerField(null=True)
    hpmax = models.IntegerField(null=True)
    sp = models.IntegerField(null=True)
    spmax = models.IntegerField(null=True)
    ac = models.IntegerField(null=True)
    weapon = models.CharField(max_length=255, null=True)
    damMessage = models.CharField(max_length=255, null=True)
    xp = models.IntegerField(null=True)
    image = models.ImageField(upload_to='mobs/', null=True)
    weakness = models.CharField(
        max_length=15,
        choices=WEAKNESS_CHOICES,
        default=NONE, null=True)




    def __str__(self):
        return self.name
