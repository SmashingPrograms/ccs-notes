from re import A
from sys import api_version
from django.urls import path, include

from books.views import BookListView

app_name = 'api'

urlpatterns = [
  path('books/', include('books.urls', namespace="books")),
]