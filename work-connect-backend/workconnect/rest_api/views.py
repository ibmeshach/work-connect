from rest_framework.decorators import api_view, authentication_classes, permission_classes, parser_classes
from rest_framework.response import Response
from .serializers import (
    PostSerializer, EmployeeSerializer,
    EmployerSerializer, UserSerializer,
    CommentSerializer, ApplicationFormSerializer,
    JobSerializer
    )
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView 
from .models import (
    Post, Employee_user, Employer_user,
    User, Comment, Application_form, Job
    )
from datetime import date
from rest_framework import authentication, permissions
from django.contrib.auth import authenticate
import json

class PostViews(APIView):


    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.query_params:
            try:
                if "author_id" in request.query_params:
                    author = User.objects.get(id=request.query_params['author_id'])
                    post = Post.objects.filter(author__exact=author)
                else:
                    post = Post.objects.filter(title__icontains=request.query_params['title'])
            except Exception as err:
                return Response({'message': 'failed', 'error': err.args}, status=status.HTTP_404_NOT_FOUND)
        else:
            post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.validated_data['author'] = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors})


class CommentViews(APIView):

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, post_id):
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response({'message': 'post object does not exist'}, status=status.HTTP_404_NOT_FOUND)
        comment = Comment.objects.filter(post=post)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, post_id):
        data = request.data
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            Response({'message': 'post object does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.validated_data['post'] = post
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class JobViews(APIView):

    authentication_classes =[authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.query_params:
            try:
                if "employer_id" in request.query_params:
                    employer = Employer_user.objects.get(id=request.query_params['employer_id'])
                    job = Job.objects.filter(employer_user__exact=employer)
                else:
                    job = Job.objects.filter(position__icontains=request.query_params['position'])
            except Exception as err:
                return Response({'message': 'failed', 'error': err.args}, status=status.HTTP_404_NOT_FOUND)
        else:
            job = Job.objects.all()
        serializer = JobSerializer(job, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        serializer = JobSerializer(data=data)
        if serializer.is_valid():
            try:
                employer_id = request.data['employer_id']
            except KeyError:
                return Response({'message': 'provide the employer_id key'}, status=status.HTTP_400_BAD_REQUEST)
            employer = Employer_user.objects.get(id=employer_id)
            serializer.validated_data['employer_user'] = employer
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class ApplicationFromView(APIView):
    
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


    def post(self, request, job_id):
        data = request.data
        serializer = ApplicationFormSerializer(data=data)
        if serializer.is_valid():
            job = Job.objects.get(id=job_id)
            serializer.validated_data['Job'] = job
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, job_id):
        try:
            job = Job.objects.get(id=job_id)
        except Job.DoesNotExist:
            return Response({'message': 'post id does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        application_objs  = Application_form.objects.filter(Job=job)
        for obj in application_objs:
            obj.delete()
        job.delete()
        return Response({'message': 'success'}, status=status.HTTP_308_PERMANENT_REDIRECT)


    def get(self, request, job_id):
        try:
            job = Job.objects.get(id=job_id)
        except Job.DoesNotExist:
            return Response({'message': 'job id does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        application_form = Application_form.objects.filter(Job=job)
        serializer = ApplicationFormSerializer(application_form, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def RegisterEmployerUser(request):
    data = request.data
    print(data)
    id = data.get('user_id')
    serializer = EmployerSerializer(data=data)
    if serializer.is_valid():
        serializer.validated_data['date_birth'] = date.fromisoformat(data['date_birth'])
        user = User.objects.get(id=id)
        serializer.validated_data['user'] = user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid data', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def RegisterEmployeeUser(request):
    data = request.data
    id = data.get('user_id')
    serializer = EmployeeSerializer(data=data)
    if serializer.is_valid():
        serializer.validated_data['date_birth'] = date.fromisoformat(data['date_birth'])
        user = User.objects.get(id=id)
        serializer.validated_data['user'] = user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid data', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([authentication.TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def get_user_info(request):
    user = request.user
    user_type = request.query_params.get('user', None)
    if user is None:
        return Response({'message': 'bad request'}, status=status.HTTP_400_BAD_REQUEST)
    if user_type == 'employee':
        try:
            user = Employee_user.objects.get(user=user)
        except Employee_user.DoesNotExist:
            return Response({'message': 'user does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = EmployeeSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        try:
            user = Employer_user.objects.get(user=user)
        except Employer_user.DoesNotExist:
            return Response({'message': 'user does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = EmployerSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])
def UserLogin(request):
    email = request.data.get('email', None)
    password = request.data.get('password', None)

    if not email or not password:
        return Response({'error': 'No username or password'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        user = authenticate(email=email, password=password)
        if user:
            (token, created) = Token.objects.get_or_create(user=user)
            return Response({'message': 'success', 'token': token.key}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response({'message': 'Register a user'}, status=status.HTTP_401_UNAUTHORIZED)



@api_view(['POST'])
def create_user(request):
    data = request.data
    confirm_password = data.get('confirm_password', None)
    serializer = UserSerializer(data = data)
    if serializer.is_valid():
        password = serializer.validated_data.get('password', None)
        user = User.objects.create(**serializer.validated_data) if password == confirm_password\
            else None
        if not user:
            return Response({'message': 'failed', 'error': 'passwords does not match, enter the passwords again'}, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(user.password)
        user.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'failed', 'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_latest_user(request):
    user = User.objects.latest('date_joined')
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([authentication.TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def check_user(request):
    user = request.user
    try:
        Employer_user.objects.get(user=user)
    except Employer_user.DoesNotExist:
        try:
            Employee_user.objects.get(user=user)
        except Employee_user.DoesNotExist:
            return Response({'user': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'user': 'employee'}, status=status.HTTP_200_OK)
    return Response({'user': 'employer'}, status=status.HTTP_200_OK)