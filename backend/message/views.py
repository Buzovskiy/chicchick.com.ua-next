from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import MessageSerializer


class Message(APIView):
    """
    http://127.0.0.1:8000/message/send/
    """
    def post(self, request):
        message_serializer = MessageSerializer(data=request.data)
        if message_serializer.is_valid():
            message_serializer.send_telegram()
            return Response(message_serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
