from dataclasses import fields
from rest_framework import serializers
from AnnotationApp.models import Annotation

class AnnotationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annotation
        fields = ( 'AnnotationId',
                    'Document',
                    'Annotation')