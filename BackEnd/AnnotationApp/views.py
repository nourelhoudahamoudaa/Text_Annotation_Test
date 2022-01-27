import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from AnnotationApp.models import Annotation
from AnnotationApp.serializers import AnnotationSerializer
# Create your views here.
@csrf_exempt
def annotationApi(request):
    annotate_data = JSONParser().parse(request)
    annotate_serializer = AnnotationSerializer(data= annotate_data)
    dic = dict(annotate_serializer)
    text= dic['Document']
    allpoint=[]
    result = {"document":text,"annotation":allpoint}
    f=open('C:/Users/Nour/Desktop/Text_Annotation_Test/BackEnd/DataAnnotation.json','a')
    f.write('\n'+json.dumps(result))
    f.close()
    return JsonResponse("Added Successfully :)", safe=False)
