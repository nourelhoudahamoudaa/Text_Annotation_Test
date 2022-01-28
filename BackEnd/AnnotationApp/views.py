import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from AnnotationApp.models import Annotation
from AnnotationApp.serializers import AnnotationSerializer
# Create your views here.

@csrf_exempt
def annotationApi(request,id=0):
    if request.method=='GET':
        annotations = Annotation.objects.all()
        annotates_serializer = AnnotationSerializer(annotations, many=True)
        return JsonResponse(annotates_serializer.data, safe=False)

    elif request.method=='POST':
        annotate_data=JSONParser().parse(request)
        annotation_serializer = AnnotationSerializer(data=annotate_data)      
        print("aaaaa annotate_data aaaaaaa", type(annotate_data))
        if annotation_serializer.is_valid():
            annotation_serializer.save()
            dic = dict(annotate_data)
            text= dic['Document']
            allpoint=[]
            
            annotation = dic['Annotation'].split(" ++++ other ++++ ")
            for i in range(1,len(annotation)):
                onelab = annotation[i].split(" ++++ : ++++ ")
                print("aaaaa  onelabonelabonelabonelab  aaaaaaa", onelab)
                start = text.find(onelab[1])
                end = len(onelab[1])-1
                point = {"start":start,"end":end,"text":onelab[1]}
                label = {"label":[onelab[0]], "points":[point]}
                allpoint.append(label)
            
            result = {"document":text,"annotation":allpoint}
            f=open('C:/Users/Nour/Desktop/Text_Annotation_Test/BackEnd/DataAnnotation.json','a')
            f.write('\n'+json.dumps(result))
            f.close()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
