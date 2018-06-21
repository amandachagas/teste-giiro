from django.shortcuts import render

# Create your views here.


def index(request):
    context = {'name': 'index'}

    return render(request, 'mapa/index.html', context)
