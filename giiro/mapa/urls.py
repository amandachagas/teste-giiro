from django.conf.urls import url
from mapa import views

urlpatterns = [
    url('', views.index, name='index'),
]
