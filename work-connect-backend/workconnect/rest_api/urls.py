from django.urls import path
from .views import (PostViews, RegisterEmployerUser,
                    RegisterEmployeeUser, UserLogin,
                    CommentViews, ApplicationFromView,
                    JobViews, create_user, get_latest_user,
                    check_user, get_user_info
                    )

urlpatterns = [
    path('post/', PostViews.as_view()),
    path('users/', create_user),
    path('register-employer/', RegisterEmployerUser),
    path('register-employee/', RegisterEmployeeUser),
    path('login/', UserLogin),
    path('post/<int:post_id>/comments/', CommentViews.as_view()),
    path('jobs/', JobViews.as_view()),
    path('application-form/<int:job_id>/', ApplicationFromView.as_view()),
    path('users/latest/', get_latest_user),
    path('check_user/', check_user),
    path('user_info/', get_user_info)
]