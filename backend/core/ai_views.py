from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import os

class AIChatView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_message = request.data.get('message')
        context = request.data.get('context', {})

        if not user_message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        # System Prompt implementation based on Master Spec
        system_prompt = (
            "You are Koda AI, a professional educational assistant for Kazakhstan's UNT (ЕНТ) preparation. "
            "Your goal is to help students understand concepts, not just give answers. "
            "1. Explain step-by-step. 2. Be encouraging and motivational. "
            "3. If the user asks for a direct answer to a quiz, guide them to the logic instead. "
            "4. Support both Russian and Kazakh languages. "
            f"Current Lesson Context: {context.get('lesson_title', 'General')}"
        )

        try:
            # Mock AI Response for the final product demo
            # In production, this is where the call to OpenAI/Claude API happens
            ai_response = f"Koda AI: Я проанализировал твой вопрос по теме '{context.get('lesson_title', 'общей')}'. " \
                          f"Чтобы решить это, давай сначала разберем базовый принцип... [Здесь будет ответ от реальной LLM]"

            return Response({
                "reply": ai_response,
                "status": "success"
            })
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
