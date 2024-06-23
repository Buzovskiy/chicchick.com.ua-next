from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.mail import send_mail


class Command(BaseCommand):

    def handle(self, *args, **options):
        send_mail(
            "Subject here",
            "Here is the message.",
            "admin@chicchick.com.ua",
            settings.MANAGERS,
            fail_silently=False,
        )
