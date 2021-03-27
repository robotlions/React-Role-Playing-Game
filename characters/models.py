from django.db import models
from django.conf import settings

from weapons.models import Weapon
from items.models import Item



# Create your models here.
class Character(models.Model):

    WARRIOR = 'Warrior'
    MAGICIAN = 'Magician'
    JOB_CHOICES = [
        (WARRIOR, 'Warrior'),
        (MAGICIAN, 'Magician'),
    ]

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255, null=True)
    str = models.IntegerField(null=True)
    strBonus = models.IntegerField(null=True, blank=True, default= 0)
    int = models.IntegerField(null=True)
    intBonus = models.IntegerField(null=True, blank=True, default= 0)
    dex = models.IntegerField(null=True)
    dexBonus = models.IntegerField(null=True, blank=True, default= 0)
    con = models.IntegerField(null=True)
    conBonus = models.IntegerField(null=True, blank=True, default= 0)
    attack = models.IntegerField(null=True)
    level = models.IntegerField(null=True)
    hp = models.IntegerField(null=True)
    ac = models.IntegerField(null=True)
    hpmax = models.IntegerField(null=True)
    sp = models.IntegerField(null=True)
    spmax = models.IntegerField(null=True)
    xp = models.IntegerField(null=True)
    lastRoom = models.IntegerField(null=True, blank=True)
    inventory = models.JSONField(null=True, blank=True, default=dict)
    weaponInventory = models.JSONField(null=True, blank=True)
    equippedWeapon = models.JSONField(null=True, blank=True, default=dict)
    silver = models.IntegerField(null=True, blank=True, default=200)
    job = models.CharField(
        max_length=15,
        choices=JOB_CHOICES,
        default=WARRIOR, null=True)

    def __str__(self):
        return self.name


        # models.ForeignKey(Item, on_delete=models.CASCADE, null=True, blank=True, default=dict)
