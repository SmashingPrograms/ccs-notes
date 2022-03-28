# from django.shortcuts import render

from django.views.generic import ListView
from rest_framework import generics

from .models import Book
from .serializers import BookSerializer

class BookListView(generics.ListAPIView):
  queryset = Book.objects.all()
  serializer_class = BookSerializer


# from .models import Book

# # Create your views here.


# class BookListView(ListView):
#   model = Book
#   template_name = 'book_list.html'