from django.db import models
from django.conf import settings

# Create your models here.
class Item(models.Model):
        KNIFE = 'Knife'
        SWORD = 'Sword'
        CLUB = 'Club'
        AXE = 'Axe'
        MACE = 'Mace'
        POLEARM = 'Polearm'
        SPEAR = 'Spear'
        BOW = 'Bow'
        AMMO = 'Ammo'
        THROWING = 'Throwing'
        MISC = 'Misc'

        TYPE_CHOICES = [
            (KNIFE, 'Knife'),
            (SWORD, 'Sword'),
            (CLUB, 'Club'),
            (AXE, 'Axe'),
            (MACE, 'Mace'),
            (POLEARM, 'Polearm'),
            (SPEAR, 'Spear'),
            (BOW, 'Bow'),
            (AMMO, 'Ammo'),
            (THROWING, 'Throwing'),
            (MISC, 'Misc'),
        ]


        WOOD = 'Wood'
        BRONZE = 'Bronze'
        IRON = 'Iron'
        STEEL = 'Steel'
        OTHERSTEEL = 'Othersteel'
        SILVER = 'Silver'
        OBSIDIAN = 'Obsidian'
        GODSTEEL = 'Godsteel'

        MATERIAL_CHOICES = [
            (WOOD, 'Wood'),
            (BRONZE, 'Bronze'),
            (IRON, 'Iron'),
            (STEEL, 'Steel'),
            (OTHERSTEEL, 'Othersteel'),
            (SILVER, 'Silver'),
            (OBSIDIAN, 'Obsidian'),
            (GODSTEEL, 'Godsteel'),
        ]


        name = models.CharField(max_length=255, null=True, blank=True, default="item")
        desc = models.TextField(null=True, blank=True)
        level = models.IntegerField(null=True, blank=True, default=1)
        makesLight = models.BooleanField(null=True, blank=True, default=False)
        isMoney = models.BooleanField(null=True, blank=True, default=False)
        isWeapon = models.BooleanField(null=True, blank=True, default=False)
        value = models.IntegerField(null=True, blank=True)
        damageLow = models.IntegerField(null=True, blank=True)
        damageHigh = models.IntegerField(null=True, blank=True)
        range = models.IntegerField(null=True, blank=True)
        damMessage = models.CharField(max_length=255, null=True)
        bonus = models.IntegerField(null=True, blank=True, default=0)
        material = models.CharField(
            max_length=15,
            choices=MATERIAL_CHOICES,
            default=BRONZE, null=True, blank=True)

        type = models.CharField(
            max_length=15,
            choices=TYPE_CHOICES,
            default=KNIFE, null=True, blank=True)

        def __str__(self):
            return (self.name)
