from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Profile

from .models import Profile


admin.site.register(Profile)
admin.site.register(CustomUser, UserAdmin)
