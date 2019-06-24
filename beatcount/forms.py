from django import forms

from .models import Answer

from .models import Answer2

class PostForm(forms.ModelForm):
    
    class Meta:
        model = Answer

        fields = ('name', 'age', 'sex', 'status', 'track1', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7', 'track8', 'track9', 'track10', 'track11', 'track12', 'track13', 'track14', 'track15', 'track16', 'track17', 'track18', 'track19', 'track20', 'track21', 'track22', 'track23', 'track24', 'track25', 'track26', 'track27', 'track28', 'track29', 'track30', 'track31', 'track32', 'track33', 'track34', 'track35', 'track36', 'track37', 'track38', 'track39', 'track40','correct')

class PostForm2(forms.ModelForm):
    
    class Meta:
        model = Answer2
        
        fields = ('name', 'age', 'sex', 'status', 'track1', 'track2', 'track3', 'track4', 'track5', 'correct')
