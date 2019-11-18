from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = "beatcountapp"
urlpatterns = [
               path('', views.lang_select, name='lang_select'),
               path('lang_select.html', views.lang_select, name='lang_select'),
               path('test_page.html', views.test_page, name='test_page'),
               path('practice.html', views.practice, name='practice'),
               path('eng_page.html', views.eng_page, name='eng_page'),
               path('jap_page.html', views.jap_page, name='jap_page'),
               path('index.html', views.index, name='index'),
               path('blank.html', views.blank, name='blank'),
               path('cards.html', views.cards, name='cards'),
               path('charts.html', views.charts, name='charts'),
               path('navbar.html', views.navbar, name='navbar'),
               path('register.html', views.register, name='register'),
               path('tables.html', views.tables, name='tables'),
               path('release.html', views.release, name='release'),
               path('training.html', views.training, name='training'),
               path('first_step.html', views.first_step, name='first_step'),
               path('sec_step.html', views.sec_step, name='sec_step'),
               path('final_step.html', views.final_step, name='final_step'),
               path('test1.html', views.test1, name='test1'),
               path('test2.html', views.test2, name='test2'),
]

