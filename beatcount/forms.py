from django import forms

from .models import Answer

from .models import rAnswer

from .models import pAnswer

from .models import Test1

from .models import Test2

from .models import T1

from .models import T2

from .models import T3


class PostForm(forms.ModelForm):
    
    class Meta:
        model = pAnswer

        fields = ('name', 'age', 'sex', 'status', 'track1', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7', 'track8', 'track9', 'track10', 'track11', 'track12', 'track13', 'track14', 'track15', 'track16', 'track17', 'track18', 'track19', 'track20', 'track21', 'track22', 'track23', 'track24', 'track25', 'track26', 'track27', 'track28', 'track29', 'track30', 'track31', 'track32', 'track33', 'track34', 'track35', 'track36', 'track37', 'track38', 'track39', 'track40','correct')

class rPostForm(forms.ModelForm):
    
    class Meta:
        model = rAnswer
        
        fields = ('name', 'age', 'sex', 'status', 'track1', 'track2', 'track3', 'track4', 'track5', 'correct')

class Test1Form(forms.ModelForm):

    class Meta:
        model = Test1

        fields = ('name', 'track21','track38', 'track5', 'track30', 'track37', 'track26','track32', 'track24', 'track36', 'track4', 'track7', 'track28', 'track29', 'track15', 'track3', 'track27', 'track13', 'track19', 'track20', 'track10', 'correct')

class Test2Form(forms.ModelForm):

    class Meta:
        model = Test2

        fields = ('name', 'track39', 'track22', 'track35',  'track6', 'track34', 'track40', 'track25',  'track14', 'track16', 'track23', 'track11', 'track8', 'track31', 'track1', 'track33', 'track2', 'track12', 'track9', 'track17', 'track18', 'correct')

class T1Form(forms.ModelForm):

    class Meta:
        model = T1

        fields = ('name', 'track1', 'track2', 'track3', 'track4', 'track5', 'correct')

class T2Form(forms.ModelForm):

    class Meta:
        model = T2

        fields = ('name', 'track1', 'track2', 'track3', 'track4', 'track5', 'correct')
        
class T3Form(forms.ModelForm):

    class Meta:
        model = T3

        fields = ('name', 'track1', 'track2', 'track3', 'track4', 'track5', 'correct')
