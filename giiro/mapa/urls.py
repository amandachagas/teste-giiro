from django.conf.urls import url
from mapa import views

urlpatterns = [
    url('add-marker/', views.add_marker, name='add-marker'),
    url('', views.index, name='index'),
]
