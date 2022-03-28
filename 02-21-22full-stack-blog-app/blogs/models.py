from django.conf import settings
from django.db import models

# Create your models here.

class Blog(models.Model):
  author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  title = models.CharField(max_length=255)
  body = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  is_published = models.BooleanField(default=True)

  def __str__(self):
    return self.title