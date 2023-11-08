from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('index/', index_view, name='index')
]
