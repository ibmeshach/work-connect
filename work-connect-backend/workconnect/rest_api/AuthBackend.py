from django.contrib.auth.backends import BaseBackend
from rest_api.models import User
from django.db.models import Q

class MyAuthBackend(BaseBackend):

    def authenticate(self, request, email, password):
        try:
            user = User.objects.get(Q(email__exact=email))
        except User.DoesNotExist:
            return None
        if user.check_password(password):
            print('get here')
            return user if user.is_active else None
        else:
            None
