from django.conf import settings
from django.db import models

# Create your models here.

class Book(models.Model):
  title = models.CharField(max_length=255)
  author = models.CharField(max_length=255)
  image = models.ImageField(upload_to="books/", null=True)

  def __str__(self):
    return self.title


class Review(models.Model):
  text = models.TextField()
  book = models.ForeignKey(Book, on_delete=models.CASCADE)
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

  def __str__(self):
    return self.text[:50]