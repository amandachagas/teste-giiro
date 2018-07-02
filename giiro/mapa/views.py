import json

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from mapa.models import Marker

# Create your views here.


def index(request):
    context = {
        'name': 'index'
    }

    return render(request, 'mapa/index.html', context)


def load_markers(request):
    all_markers = Marker.objects.all()
    markers_list = []
    for marker in all_markers:
        item = {'id': marker.pk, 'lat': marker.lat, 'lng': marker.lng} 
        markers_list.append(item)
    return JsonResponse(json.dumps(markers_list), safe=False)


def add_marker(request):
    if request.method == 'POST':
        data = request.POST.dict()

        try:
            marker = Marker(lat=float(data['lat']), lng=float(data['lng']))
            marker.save()
            resp = {'id': marker.pk, 'lat': marker.lat, 'lng': marker.lng}

            return JsonResponse(json.dumps(resp), safe=False)
        except Exception as e:
            print(e)
            return HttpResponse(request, status=400)


def move_marker(request):
    if request.method == 'POST':
        data = request.POST.dict()

        try:
            marker = Marker.objects.get(pk=int(data['pk']))
            marker.lat = float(data['lat'])
            marker.lng = float(data['lng'])
            resp = {'id': marker.pk, 'lat': marker.lat, 'lng': marker.lng}
            marker.save()

            return JsonResponse(json.dumps(resp), safe=False)
        except Exception as e:
            print(e)
            return HttpResponse(request, status=400)


def remove_marker(request):
    if request.method == 'POST':
        data = request.POST.dict()

        try:
            marker = Marker.objects.get(pk=int(data['pk']))
            resp = {'id': marker.pk, 'lat': marker.lat, 'lng': marker.lng}
            marker.delete()

            return JsonResponse(json.dumps(resp), safe=False)
        except Exception as e:
            print(e)
            return HttpResponse(request, status=400)
