from django.db import models
from django.contrib.auth.models import User


# Create your models here.
def upload_employee_file (instance, filename):
    return '/'.join(['employee_user', str(instance.user.username), filename])

def upload_employer_file (instance, filename):
    return '/'.join(['employer_user', str(instance.user.username), filename])

def upload_app_file(instance, filename):
    return '/'.join(['resume', str(instance.user.username), filename])

class Employee_user(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_birth = models.DateField(blank=False, null=False)
    location = models.CharField(max_length=100)
    skill = models.CharField(max_length=1000)
    phone_number = models.CharField(max_length=15, blank=False, null=False)
    profile_pic = models.ImageField(upload_to=upload_employee_file, blank=True, null=True)
    country = models.CharField(max_length=100, null=False, blank=False)
    state = models.CharField(max_length=100, null=False, blank=False)
    about_me = models.CharField(max_length=2000, blank=True, null=True)
    work_experience = models.CharField(max_length=500, blank=True, null=True)
    education = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.user.first_name


class Employer_user(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_birth = models.DateField(null=False, blank=False)
    location = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, blank=False, null=False)
    company_name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100, null=False, blank=False)
    profile_pic = models.ImageField(upload_to=upload_employer_file, blank=True, null=True)
    about_company = models.CharField(max_length=2000, blank=True, null=True)

    def __str__(self):
        return self.user.first_name
    

class Post(models.Model):
    title = models.CharField(max_length=100,null=True)
    content = models.TextField(blank=False, null=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.post.title
    

class Job(models.Model):
    employer_user = models.ForeignKey(Employer_user, on_delete=models.CASCADE, related_name='jobs')
    position = models.CharField(max_length=100)
    skills_required = models.TextField()
    location = models.CharField(max_length=100)
    job_description = models.TextField()

    def __str__(self):
        return self.position

class Application_form(models.Model):
    Job = models.ForeignKey(Job, null=True, on_delete=models.CASCADE)
    position = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    skills = models.TextField()
    resume = models.FileField(upload_to=upload_app_file, blank=True, null=True)
    cover_letter = models.TextField()

    def __str__(self):
        return self.first_name

