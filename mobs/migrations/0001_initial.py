# Generated by Django 3.1.7 on 2021-03-23 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mob',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('desc', models.CharField(max_length=255, null=True)),
                ('damage', models.IntegerField(null=True)),
                ('attack', models.IntegerField(null=True)),
                ('hp', models.IntegerField(null=True)),
                ('hpmax', models.IntegerField(null=True)),
                ('sp', models.IntegerField(null=True)),
                ('spmax', models.IntegerField(null=True)),
                ('ac', models.IntegerField(null=True)),
                ('weapon', models.CharField(max_length=255, null=True)),
                ('damMessage', models.CharField(max_length=255, null=True)),
                ('xp', models.IntegerField(null=True)),
                ('image', models.ImageField(null=True, upload_to='mobs/')),
            ],
        ),
    ]