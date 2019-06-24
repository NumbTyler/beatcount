from django.shortcuts import render
from .forms import PostForm
from .forms import PostForm2
from django.shortcuts import redirect
from .models import Answer
from django.template import RequestContext
from django.db.models import Sum
from django.db.models import Count


def lang_select(request):
    return render(request, 'beatcount/lang_select.html', {})
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
def jap_page(request):
    return render(request, 'beatcount/jap_page.html', {})
def eng_page(request):
    return render(request, 'beatcount/eng_page.html', {})
def practice(request):
    return render(request, 'beatcount/practice.html', {})
def release(request):
    if request.method == "POST":
        form = PostForm2(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            #post.name = request.user
            post.save()
                #return redirect(index_page, pk=post.pk)
    else:
        form = PostForm2()
    return render(request, 'beatcount/release.html', {'form':form})

def index(request):

    d = {
        'answers': Answer.objects.all(),
        'sum1':  Answer.objects.aggregate( Sum('track1')),
        'sum2':  Answer.objects.aggregate( Sum('track2')),
        'sum3':  Answer.objects.aggregate( Sum('track3')),
        'sum4':  Answer.objects.aggregate( Sum('track4')),
        'sum5':  Answer.objects.aggregate( Sum('track5')),
        'sum6':  Answer.objects.aggregate( Sum('track6')),
        'sum7':  Answer.objects.aggregate( Sum('track7')),
        'sum8':  Answer.objects.aggregate( Sum('track8')),
        'sum9':  Answer.objects.aggregate( Sum('track9')),
        'sum10':  Answer.objects.aggregate( Sum('track10')),
        'sum11':  Answer.objects.aggregate( Sum('track11')),
        'sum12':  Answer.objects.aggregate( Sum('track12')),
        'sum13':  Answer.objects.aggregate( Sum('track13')),
        'sum14':  Answer.objects.aggregate( Sum('track14')),
        'sum15':  Answer.objects.aggregate( Sum('track15')),
        'sum16':  Answer.objects.aggregate( Sum('track16')),
        'sum17':  Answer.objects.aggregate( Sum('track17')),
        'sum18':  Answer.objects.aggregate( Sum('track18')),
        'sum19':  Answer.objects.aggregate( Sum('track19')),
        'sum20':  Answer.objects.aggregate( Sum('track20')),
        'sum21':  Answer.objects.aggregate( Sum('track21')),
        'sum22':  Answer.objects.aggregate( Sum('track22')),
        'sum23':  Answer.objects.aggregate( Sum('track23')),
        'sum24':  Answer.objects.aggregate( Sum('track24')),
        'sum25':  Answer.objects.aggregate( Sum('track25')),
        'sum26':  Answer.objects.aggregate( Sum('track26')),
        'sum27':  Answer.objects.aggregate( Sum('track27')),
        'sum28':  Answer.objects.aggregate( Sum('track28')),
        'sum29':  Answer.objects.aggregate( Sum('track29')),
        'sum30':  Answer.objects.aggregate( Sum('track30')),
        'sum31':  Answer.objects.aggregate( Sum('track31')),
        'sum32':  Answer.objects.aggregate( Sum('track32')),
        'sum33':  Answer.objects.aggregate( Sum('track33')),
        'sum34':  Answer.objects.aggregate( Sum('track34')),
        'sum35':  Answer.objects.aggregate( Sum('track35')),
        'sum36':  Answer.objects.aggregate( Sum('track36')),
        'sum37':  Answer.objects.aggregate( Sum('track37')),
        'sum38':  Answer.objects.aggregate( Sum('track38')),
        'sum39':  Answer.objects.aggregate( Sum('track39')),
        'sum40':  Answer.objects.aggregate( Sum('track40')),
        'user_count': Answer.objects.count(),
#ID for par chart
        'dj_count': Answer.objects.filter(status="DJ").count(),
        'piano_count': Answer.objects.filter(status="Piano").count(),
        'guitar_count': Answer.objects.filter(status="Guitar").count(),
        'bass_count': Answer.objects.filter(status="Bass").count(),
        'drum_count': Answer.objects.filter(status="Drum").count(),
        'brass_count': Answer.objects.filter(status="Brass").count(),
        'strings_count': Answer.objects.filter(status="Strings").count(),
        'dance_count': Answer.objects.filter(status="Dance").count(),
        'others_count': Answer.objects.filter(status="Others").count(),
        'noex_count': Answer.objects.filter(status="No Experience").count(),

            'latest' : Answer.objects.order_by('created_date').last(),
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
