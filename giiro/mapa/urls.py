from django.conf.urls import url
from mapa import views

urlpatterns = [
    url('add-marker/', views.add_marker, name='add-marker'),
    url('load-markers/', views.load_markers, name='load-markers'),
    url('remove-marker/', views.remove_marker, name='remove-marker'),
    url('', views.index, name='index'),
]
