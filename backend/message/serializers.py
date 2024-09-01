from rest_framework import serializers
from asgiref.sync import async_to_sync
from telegram import Bot
from django.conf import settings


class MessageSerializer(serializers.Serializer):
    name = serializers.CharField()
    phone = serializers.CharField()

    def send_telegram(self):
        name = self.validated_data.get('name').strip()
        phone = self.validated_data.get('phone').strip()
        text = "*Запит на зворотній дзвінок!*\n"
        text += f"\nім'я: *{name}*;"
        text += f"\nтелефон: *{phone}*;"

        bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)
        async_to_sync(bot.send_message)(
            chat_id=settings.TELEGRAM_GROUP_CHAT_ID,
            text=text,
            parse_mode='markdown',
        )
