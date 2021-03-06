# Generated by Django 3.1.7 on 2021-03-30 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0043_auto_20210330_1833'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='acBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='attackBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='damageBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='evadeBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='hpBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='spBonus',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='tank',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
