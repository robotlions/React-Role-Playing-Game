from django.db import models
from django.conf import settings

from weapons.models import Weapon
from items.models import Item
from jobs.models import Job


# Create your models here.
class Character(models.Model):


    STARTWEAPON =[{
        "id": 2,
        "name": "letter opener",
        "desc": "A crummy little letter opener",
        "level": 1,
        "makesLight": False,
        "isMoney": False,
        "isWeapon": True,
        "value": 1,
        "damageLow": 1,
        "damageHigh": 2,
        "range": "",
        "damMessage": "annoys",
        "bonus": 0,
        "isUsable": False,
        "material": "Bronze",
        "type": "Knife",
    }]

    STARTINVENTORY = [{
        "id": 4,
        "name": "torch",
        "desc": "A rag on a stick.",
        "level": 1,
        "makesLight": True,
        "isMoney": False,
        "isWeapon": False,
        "value": 2,
        "damageLow": None,
        "damageHigh": None,
        "range": None,
        "damMessage": "singes",
        "bonus": 0,
        "isUsable": True,
        "material": "Wood",
        "type": "Misc"
    },
        {
        "id": 3,
        "name": "practice sword",
        "desc": "A blunt wooden sword for children. Good luck saving the world, hero.",
        "level": 1,
        "makesLight": False,
        "isMoney": False,
        "isWeapon": True,
        "value": 1,
        "damageLow": 1,
        "damageHigh": 2,
        "range": None,
        "damMessage": "bruises",
        "bonus": 0,
        "isUsable": False,
        "material": "Wood",
        "type": "Sword"
    }

    ]


    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255, null=True)
    str = models.IntegerField(null=True)
    strBonus = models.IntegerField(null=True, blank=True, default= 0)
    attackBonus = models.IntegerField(null=True, blank=True, default= 0)
    damageBonus = models.IntegerField(null=True, blank=True, default= 0)
    int = models.IntegerField(null=True)
    intBonus = models.IntegerField(null=True, blank=True, default= 0)
    dex = models.IntegerField(null=True)
    dexBonus = models.IntegerField(null=True, blank=True, default= 0)
    evadeBonus = models.IntegerField(null=True, blank=True, default= 0)
    con = models.IntegerField(null=True)
    conBonus = models.IntegerField(null=True, blank=True, default= 0)
    attack = models.IntegerField(null=True)
    level = models.IntegerField(null=True)
    hp = models.IntegerField(null=True)
    hpBonus = models.IntegerField(null=True, blank=True, default= 0)
    ac = models.IntegerField(null=True)
    acBonus = models.IntegerField(null=True, blank=True, default= 0)
    hpmax = models.IntegerField(null=True)
    sp = models.IntegerField(null=True)
    spmax = models.IntegerField(null=True)
    spBonus = models.IntegerField(null=True, blank=True, default= 0)
    xp = models.IntegerField(null=True)
    lastRoom = models.IntegerField(null=True, blank=True)
    inventory = models.JSONField(null=True, blank=True, default=STARTINVENTORY)
    weaponInventory = models.JSONField(null=True, blank=True)
    equippedWeapon = models.JSONField(null=True, blank=True, default=STARTWEAPON)
    silver = models.IntegerField(null=True, blank=True, default=200)
    builder = models.BooleanField(null=True, blank=True, default=False)
    magicUser = models.BooleanField(null=True, blank=True, default=False)
    tank = models.BooleanField(null=True, blank=True, default=False)
    job = models.CharField(max_length=255, null=True, default="Warrior")


    def __str__(self):
        return self.name


        # models.ForeignKey(Item, on_delete=models.CASCADE, null=True, blank=True, default=dict)
