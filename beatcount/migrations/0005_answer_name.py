# Generated by Django 2.0.5 on 2018-05-29 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beatcount', '0004_auto_20180529_1501'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='name',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]