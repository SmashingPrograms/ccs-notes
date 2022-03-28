# from django.shortcuts import render

# from django.views.generic import ListView
from rest_framework import generics

from .models import Book, Review
from .serializers import BookSerializer, ReviewSerializer

class BookListView(generics.ListAPIView):
  queryset = Book.objects.all()
  serializer_class = BookSerializer

class BookReviewList(generics.ListCreateAPIView):
  # queryset = Review.objects.all()
  serializer_class = ReviewSerializer

  def get_queryset(self):
    """
    This view should return a list of all reviews by the book passed in the URL.
    """
    book = self.kwargs['book']
    return Review.objects.filter(book=book)

class BookReviewDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
  