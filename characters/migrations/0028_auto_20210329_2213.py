# Generated by Django 3.1.7 on 2021-03-29 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0027_auto_20210329_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='equippedWeapon',
            field=models.JSONField(blank=True, default=[], null=True),
        ),
    ]