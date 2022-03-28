from django.urls import path

from .views import BookListView, ReviewListCreateAPIView

app_name = 'books'



urlpatterns = [
  path('reviews/', ReviewListCreateAPIView.as_view(), name='review_list_create'),
  path('', BookListView.as_view(), name='book_list'),
]