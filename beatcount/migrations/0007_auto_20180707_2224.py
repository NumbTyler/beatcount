# Generated by Django 2.0.5 on 2018-07-07 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beatcount', '0006_auto_20180705_1710'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='age',
            field=models.IntegerField(default=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='answer',
            name='correct',
            field=models.IntegerField(default=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='answer',
            name='sex',
            field=models.CharField(default=2, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='answer',
            name='status',
            field=models.CharField(default=2, max_length=50),
            preserve_default=False,
        ),
    ]