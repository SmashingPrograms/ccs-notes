from django.urls import path

from .views import BookListView, BookReviewList, BookReviewDetail

app_name = 'books'



urlpatterns = [
  path('<int:book>/reviews/<int:pk>/', BookReviewDetail.as_view(), name='book_review_detail'),
  path('<int:book>/reviews/', BookReviewList.as_view(), name='book_reviews'),
  path('', BookListView.as_view(), name='book_list'),
]