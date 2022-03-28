# returns data rendered to us in JSON or XML
# parse the data coming back in from a post request, convert it back into complex datatypes

from rest_framework import serializers

from .models import Book

class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = ('id', 'title', 'author',)