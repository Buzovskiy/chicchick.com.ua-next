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


class SalonPhone(models.Model):
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE)
    phone = models.CharField(max_length=255, null=False, blank=False)
    phone_iso = models.CharField(max_length=255, null=False, blank=False, default='')

    class Meta:
        unique_together = (('salon', 'phone'),)


class Settings(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    key = models.CharField(max_length=255, null=False, blank=False)
    value = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=True, blank=True)

    objects = models.Manager()

    def __str__(self):
        return f"{self.key}: {self.value}"

    class Meta:
        verbose_name = 'Settings'
        verbose_name_plural = 'Settings'
