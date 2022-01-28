from django.db import models

# Create your models here.
class Annotation(models.Model):
    AnnotationId = models.AutoField(primary_key=True)
    Document = models.CharField(max_length=10000)
    Annotation = models.CharField(max_length=1000)