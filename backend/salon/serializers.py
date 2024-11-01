from rest_framework import serializers

from staff.serializers import StaffSerializer
from .models import Salon, Day, SalonPhone, Settings


class DaySerializer(serializers.ModelSerializer):
    staff = StaffSerializer(source="schedule", many=True, read_only=True)
    titleShort = serializers.ReadOnlyField(source='title_short')

    class Meta:
        model = Day
        fields = ('id', 'title', 'titleShort', 'staff')


class SalonPhoneSerializer(serializers.ModelSerializer):
    phoneIso = serializers.CharField(source='phone_iso')

    class Meta:
        model = SalonPhone
        fields = ('id', 'phone', 'phoneIso')


class SalonSerializer(serializers.ModelSerializer):
    days = DaySerializer(source='day_set', many=True, read_only=True)
    phones = SalonPhoneSerializer(source='salonphone_set', many=True, read_only=True)

    class Meta:
        model = Salon
        fields = ('id', 'address', 'phones', 'days')


class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = ('id', 'title', 'key', 'value')


