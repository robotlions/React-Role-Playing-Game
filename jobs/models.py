from django.db import models
from django.conf import settings

# Create your models here.
class Job(models.Model):

    name = models.CharField(max_length=255, null=True, blank=True, default="job")
    desc = models.TextField(null=True, blank=True)
    attackBonus = models.IntegerField(null=True, blank=True)
    damageBonus = models.IntegerField(null=True, blank=True)
    evadeBonus = models.IntegerField(null=True, blank=True)
    hpBonus = models.IntegerField(null=True, blank=True)
    spBonus = models.IntegerField(null=True, blank=True)
    acBonus = models.IntegerField(null=True, blank=True)
    magicUser = models.BooleanField(null=True, blank=True, default=False)
    tank = models.BooleanField(null=True, blank=True, default=False)


    def __str__(self):
        return self.name
