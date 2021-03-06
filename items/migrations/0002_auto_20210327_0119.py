# Generated by Django 3.1.7 on 2021-03-27 01:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='money',
            new_name='isMoney',
        ),
        migrations.AddField(
            model_name='item',
            name='bonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='damMessage',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='damageHigh',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='damageLow',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='isWeapon',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='material',
            field=models.CharField(blank=True, choices=[('Wood', 'Wood'), ('Bronze', 'Bronze'), ('Iron', 'Iron'), ('Steel', 'Steel'), ('Othersteel', 'Othersteel'), ('Silver', 'Silver'), ('Obsidian', 'Obsidian'), ('Godsteel', 'Godsteel')], default='Bronze', max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='range',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='type',
            field=models.CharField(blank=True, choices=[('Knife', 'Knife'), ('Sword', 'Sword'), ('Club', 'Club'), ('Axe', 'Axe'), ('Mace', 'Mace'), ('Polearm', 'Polearm'), ('Spear', 'Spear'), ('Bow', 'Bow'), ('Ammo', 'Ammo'), ('Throwing', 'Throwing'), ('Misc', 'Misc')], default='Knife', max_length=15, null=True),
        ),
    ]
