# Generated by Django 3.1.7 on 2021-03-26 18:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('weapons', '0001_initial'),
        ('characters', '0010_delete_weapon'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='equippedWeapon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='weapons.weapon'),
        ),
    ]
