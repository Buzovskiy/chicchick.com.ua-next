from django.db import models


class Staff(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="staff/")

    def __str__(self):
        return self.name
