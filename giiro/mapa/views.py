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
    pass


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
    pass


def remove_marker(request):
    pass
