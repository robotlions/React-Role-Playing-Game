# Generated by Django 3.1.7 on 2021-03-30 18:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='ac',
            new_name='acBonus',
        ),
        migrations.RemoveField(
            model_name='job',
            name='startingHp',
        ),
        migrations.RemoveField(
            model_name='job',
            name='startingSp',
        ),
    ]