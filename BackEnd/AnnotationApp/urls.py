from django.conf.urls import url
from AnnotationApp import views
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^annotation/$', views.annotationApi),
    url(r'^annotation/([0-9]+)$', views.annotationApi)
]