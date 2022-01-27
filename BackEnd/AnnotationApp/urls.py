from django.conf.urls import url
from AnnotationApp import views

urlpatterns = [
    url(r'^annotation/$', views.annotationApi)
]
