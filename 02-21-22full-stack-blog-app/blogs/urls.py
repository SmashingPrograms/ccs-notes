from django.urls import path

from .views import BlogListAPIView, BlogDetailAPIView

urlpatterns = [
  path('<int:pk>/', BlogDetailAPIView.as_view()),
  path('', BlogListAPIView.as_view()),
]