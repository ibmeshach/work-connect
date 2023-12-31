# Generated by Django 4.2.2 on 2023-07-02 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0007_alter_employee_user_profile_pic_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee_user',
            name='about_me',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='employee_user',
            name='education',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='employee_user',
            name='work_experience',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='employer_user',
            name='about_company',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]
