from django.db import models


class MetaTag(models.Model):
    page_title = models.CharField(max_length=255, null=False, blank=False)
    slug = models.CharField(max_length=255, null=False, blank=False)
    meta_title = models.CharField(max_length=255, null=False, blank=False)
    meta_description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.page_title
