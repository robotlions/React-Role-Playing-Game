# Generated by Django 3.1.7 on 2021-03-27 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0002_auto_20210327_0119'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='isUsable',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
