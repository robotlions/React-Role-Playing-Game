# Generated by Django 3.1.7 on 2021-03-26 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0004_auto_20210325_2236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='name',
            field=models.CharField(blank=True, default='New Room', max_length=255, null=True),
        ),
    ]
