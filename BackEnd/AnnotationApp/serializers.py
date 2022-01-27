from dataclasses import fields
from rest_framework import serializers
from AnnotationApp.models import Annotation

class AnnotationSerializer(serializers.ModelSerializer):
    model = Annotation
    fields = ( 'AnnotationId',
                'Document',
                'Skills',
                'Experience',
                'Diploma',
                'Diploma_major')