# Generated by Django 3.1.7 on 2021-03-25 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_auto_20210324_0242'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='desc',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
