# returns data rendered to us in JSON or XML
# parse the data coming back in from a post request, convert it back into complex datatypes

from rest_framework import serializers

from .models import Book, Review

class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = ('id', 'title', 'author',)

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = ('id', 'text', 'book')