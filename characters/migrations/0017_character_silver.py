# Generated by Django 3.1.7 on 2021-03-27 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0016_auto_20210327_0133'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='silver',
            field=models.IntegerField(blank=True, default=200, null=True),
        ),
    ]