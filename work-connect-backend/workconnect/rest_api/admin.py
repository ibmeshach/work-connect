from django.contrib import admin
from rest_api.models import (Post, Employee_user, Comment,
                             Job, Application_form, Employer_user)
# Register your models here.

admin.site.register(Comment)
admin.site.register(Post)
admin.site.register(Employee_user)
admin.site.register(Employer_user)
admin.site.register(Job)
admin.site.register(Application_form)
