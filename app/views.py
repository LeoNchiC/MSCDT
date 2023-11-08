from django.http import Http404, HttpResponseRedirect
from django.http import HttpResponse

from django.shortcuts import render
from django.urls import reverse

#
# def home(request):
#     return HttpResponse("<h1>Добро пожаловать на мой сайт!</h1>")

def index(request):
    name = request.GET.get('name', 'Гость')
    return render(request, 'base.html', {'name': name})