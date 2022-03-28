from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Blog
from .serializers import BlogSerializer
from .permissions import IsAuthorOrReadOnly

# Create your views here.

class BlogListAPIView(generics.ListCreateAPIView):
  permission_classes = (IsAuthenticatedOrReadOnly,)
  # Add - to created_at tells it to go in descending order
  queryset = Blog.objects.order_by('-created_at')
  serializer_class = BlogSerializer


class BlogDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  permission_classes = (IsAuthorOrReadOnly,)
  queryset = Blog.objects.order_by('-created_at')
  serializer_class = BlogSerializer
