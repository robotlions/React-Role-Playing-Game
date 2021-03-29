from django.test import TestCase

# Create your tests here.
from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse
from .models import Mob
from .serializers import MobSerializer
# User = get_user_model()
class MobTests(TestCase):
    def setUp(self):
        user = get_user_model().objects.create(
            username = "admin",
            email = "chadmusick@gmail.com",
            password = "25Or6to4"
        )
        self.mob = Mob.objects.create(

            name = "Name test",
            desc = "Description test",
            damage = 10,
            attack = 10,
            hp = 10,
            hpmax = 10,
            sp = 10,
            spmax = 10,
            ac = 10,
            weapon = "test weapon",
            damMessage = "test damage message",
            xp = 10,
            image = None,

            isShopkeeper = False,
            weakness = "what"
        )
    def test_mob_content(self):
        mob = Mob.objects.get(id=1)
        #here you only need what you want to test
        self.assertEqual(f"{mob.name}", "Name test")
    
