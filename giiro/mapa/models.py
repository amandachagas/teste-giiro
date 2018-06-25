from django.contrib.gis.db import models

# Create your models here.


class Marker(models.Model):
    lat = models.FloatField()
    lng = models.FloatField()
