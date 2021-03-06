from django.shortcuts import render
from .forms import PostForm
from .forms import rPostForm
from .forms import Test1Form
from .forms import Test2Form
from .forms import T1Form
from .forms import T2Form
from .forms import T3Form
from django.shortcuts import redirect
from .models import Answer
from .models import pAnswer
from .models import Test1
from .models import Test2
from .models import T1
from .models import T2
from .models import T3
from django.template import RequestContext
from django.db.models import Sum
from django.db.models import Count


def lang_select(request):
    return render(request, 'beatcount/lang_select.html', {})
def training(request):
    return render(request, 'beatcount/training.html', {})
def first_step(request):
    if request.method == "POST":
        form = T1Form(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = T1Form()
    return render(request, 'beatcount/first_step.html', {'form':form})
    
def sec_step(request):
    if request.method == "POST":
        form = T2Form(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = T2Form()
    return render(request, 'beatcount/sec_step.html', {'form':form})
    
def final_step(request):
    if request.method == "POST":
        form = T3Form(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = T3Form()
    return render(request, 'beatcount/final_step.html', {'form':form})
    
def test_page(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'beatcount/test_page.html', {'form':form})
    
def test1(request):
    if request.method == "POST":
        form = Test1Form(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = Test1Form()
    return render(request, 'beatcount/test1.html', {'form':form})

def test2(request):
    if request.method == "POST":
        form = Test2Form(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = Test2Form()
    return render(request, 'beatcount/test2.html', {'form':form})

def jap_page(request):
    return render(request, 'beatcount/jap_page.html', {})
def eng_page(request):
    return render(request, 'beatcount/eng_page.html', {})
def practice(request):
    return render(request, 'beatcount/practice.html', {})
def release(request):
    if request.method == "POST":
        form = rPostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = rPostForm()
    return render(request, 'beatcount/release.html', {'form':form})

def index(request):

    d = {
        'answers': pAnswer.objects.all(),
        'sum1':  pAnswer.objects.aggregate( Sum('track1')),
        'sum2':  pAnswer.objects.aggregate( Sum('track2')),
        'sum3':  pAnswer.objects.aggregate( Sum('track3')),
        'sum4':  pAnswer.objects.aggregate( Sum('track4')),
        'sum5':  pAnswer.objects.aggregate( Sum('track5')),
        'sum6':  pAnswer.objects.aggregate( Sum('track6')),
        'sum7':  pAnswer.objects.aggregate( Sum('track7')),
        'sum8':  pAnswer.objects.aggregate( Sum('track8')),
        'sum9':  pAnswer.objects.aggregate( Sum('track9')),
        'sum10':  pAnswer.objects.aggregate( Sum('track10')),
        'sum11':  pAnswer.objects.aggregate( Sum('track11')),
        'sum12':  pAnswer.objects.aggregate( Sum('track12')),
        'sum13':  pAnswer.objects.aggregate( Sum('track13')),
        'sum14':  pAnswer.objects.aggregate( Sum('track14')),
        'sum15':  pAnswer.objects.aggregate( Sum('track15')),
        'sum16':  pAnswer.objects.aggregate( Sum('track16')),
        'sum17':  pAnswer.objects.aggregate( Sum('track17')),
        'sum18':  pAnswer.objects.aggregate( Sum('track18')),
        'sum19':  pAnswer.objects.aggregate( Sum('track19')),
        'sum20':  pAnswer.objects.aggregate( Sum('track20')),
        'sum21':  pAnswer.objects.aggregate( Sum('track21')),
        'sum22':  pAnswer.objects.aggregate( Sum('track22')),
        'sum23':  pAnswer.objects.aggregate( Sum('track23')),
        'sum24':  pAnswer.objects.aggregate( Sum('track24')),
        'sum25':  pAnswer.objects.aggregate( Sum('track25')),
        'sum26':  pAnswer.objects.aggregate( Sum('track26')),
        'sum27':  pAnswer.objects.aggregate( Sum('track27')),
        'sum28':  pAnswer.objects.aggregate( Sum('track28')),
        'sum29':  pAnswer.objects.aggregate( Sum('track29')),
        'sum30':  pAnswer.objects.aggregate( Sum('track30')),
        'sum31':  pAnswer.objects.aggregate( Sum('track31')),
        'sum32':  pAnswer.objects.aggregate( Sum('track32')),
        'sum33':  pAnswer.objects.aggregate( Sum('track33')),
        'sum34':  pAnswer.objects.aggregate( Sum('track34')),
        'sum35':  pAnswer.objects.aggregate( Sum('track35')),
        'sum36':  pAnswer.objects.aggregate( Sum('track36')),
        'sum37':  pAnswer.objects.aggregate( Sum('track37')),
        'sum38':  pAnswer.objects.aggregate( Sum('track38')),
        'sum39':  pAnswer.objects.aggregate( Sum('track39')),
        'sum40':  pAnswer.objects.aggregate( Sum('track40')),
        'user_count': pAnswer.objects.count(),
#ID for par chart
        'dj_count': pAnswer.objects.filter(status="DJ").count(),
        'piano_count': pAnswer.objects.filter(status="Piano").count(),
        'guitar_count': pAnswer.objects.filter(status="Guitar").count(),
        'bass_count': pAnswer.objects.filter(status="Bass").count(),
        'drum_count': pAnswer.objects.filter(status="Drum").count(),
        'brass_count': pAnswer.objects.filter(status="Brass").count(),
        'strings_count': pAnswer.objects.filter(status="Strings").count(),
        'dance_count': pAnswer.objects.filter(status="Dance").count(),
        'sing_count': pAnswer.objects.filter(status="Singing").count(),
        'others_count': pAnswer.objects.filter(status="Others").count(),
        'noex_count': pAnswer.objects.filter(status="No Experience").count(),

            'latest' : pAnswer.objects.order_by('created_date').last(),
    }

    return render(request, 'beatcount/index.html', d)

def blank(request):
    return render(request, 'beatcount/blank.html', {})
def cards(request):
    return render(request, 'beatcount/cards.html', {})
def charts(request):
    return render(request, 'beatcount/charts.html', {})
    #def forgot-password(request):
#return render(request, 'beatcount/forgot-password.html', {})
def navbar(request):
    return render(request, 'beatcount/navbar.html', {})
def register(request):
    return render(request, 'beatcount/register.html', {})
def tables(request):
    return render(request, 'beatcount/tables.html', {})

