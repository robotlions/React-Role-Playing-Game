# Generated by Django 3.1.7 on 2021-03-28 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0021_auto_20210327_1511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='equippedWeapon',
            field=models.JSONField(blank=True, default=[], null=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='inventory',
            field=models.JSONField(blank=True, default=[], null=True),
        ),
    ]