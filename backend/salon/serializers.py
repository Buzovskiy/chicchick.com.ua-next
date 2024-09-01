from rest_framework import serializers

from staff.serializers import StaffSerializer
from .models import Salon, Day


class DaySerializer(serializers.ModelSerializer):
    staff = StaffSerializer(source="schedule", many=True, read_only=True)
    titleShort = serializers.ReadOnlyField(source='title_short')

    class Meta:
        model = Day
        fields = ('id', 'title', 'titleShort', 'staff')


class SalonSerializer(serializers.ModelSerializer):
    days = DaySerializer(source='day_set', many=True, read_only=True)

    class Meta:
        model = Salon
        fields = ('id', 'address', 'days')
