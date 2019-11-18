# Generated by Django 2.1.5 on 2019-11-11 00:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('beatcount', '0012_test1_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Test2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('track1', models.IntegerField()),
                ('track2', models.IntegerField()),
                ('track3', models.IntegerField()),
                ('track4', models.IntegerField()),
                ('track5', models.IntegerField()),
                ('track6', models.IntegerField()),
                ('track7', models.IntegerField()),
                ('track8', models.IntegerField()),
                ('track9', models.IntegerField()),
                ('track10', models.IntegerField()),
                ('track11', models.IntegerField()),
                ('track12', models.IntegerField()),
                ('track13', models.IntegerField()),
                ('track14', models.IntegerField()),
                ('track15', models.IntegerField()),
                ('track16', models.IntegerField()),
                ('track17', models.IntegerField()),
                ('track18', models.IntegerField()),
                ('track19', models.IntegerField()),
                ('track20', models.IntegerField()),
                ('correct', models.IntegerField()),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
