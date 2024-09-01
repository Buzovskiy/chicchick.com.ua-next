from django.db import models


class Salon(models.Model):
    address = models.CharField(max_length=255)

    objects = models.Manager()

    def __str__(self):
        return self.address


class Day(models.Model):
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    title_short = models.CharField(max_length=255)
    schedule = models.ManyToManyField('staff.Staff', blank=True)

    objects = models.Manager()

    def __str__(self):
        return self.title
