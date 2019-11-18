from django.db import models
from django.utils import timezone

class Answer(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=20)
    status = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    track6 = models.IntegerField()
    track7 = models.IntegerField()
    track8 = models.IntegerField()
    track9 = models.IntegerField()
    track10 = models.IntegerField()
    track11 = models.IntegerField()
    track12 = models.IntegerField()
    track13 = models.IntegerField()
    track14 = models.IntegerField()
    track15 = models.IntegerField()
    track16 = models.IntegerField()
    track17 = models.IntegerField()
    track18 = models.IntegerField()
    track19 = models.IntegerField()
    track20 = models.IntegerField()
    track21 = models.IntegerField()
    track22 = models.IntegerField()
    track23 = models.IntegerField()
    track24 = models.IntegerField()
    track25 = models.IntegerField()
    track26 = models.IntegerField()
    track27 = models.IntegerField()
    track28 = models.IntegerField()
    track29 = models.IntegerField()
    track30 = models.IntegerField()
    track31 = models.IntegerField()
    track32 = models.IntegerField()
    track33 = models.IntegerField()
    track34 = models.IntegerField()
    track35 = models.IntegerField()
    track36 = models.IntegerField()
    track37 = models.IntegerField()
    track38 = models.IntegerField()
    track39 = models.IntegerField()
    track40 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(
            default=timezone.now)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

class rAnswer(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=20)
    status = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

class pAnswer(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=20)
    status = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    track6 = models.IntegerField()
    track7 = models.IntegerField()
    track8 = models.IntegerField()
    track9 = models.IntegerField()
    track10 = models.IntegerField()
    track11 = models.IntegerField()
    track12 = models.IntegerField()
    track13 = models.IntegerField()
    track14 = models.IntegerField()
    track15 = models.IntegerField()
    track16 = models.IntegerField()
    track17 = models.IntegerField()
    track18 = models.IntegerField()
    track19 = models.IntegerField()
    track20 = models.IntegerField()
    track21 = models.IntegerField()
    track22 = models.IntegerField()
    track23 = models.IntegerField()
    track24 = models.IntegerField()
    track25 = models.IntegerField()
    track26 = models.IntegerField()
    track27 = models.IntegerField()
    track28 = models.IntegerField()
    track29 = models.IntegerField()
    track30 = models.IntegerField()
    track31 = models.IntegerField()
    track32 = models.IntegerField()
    track33 = models.IntegerField()
    track34 = models.IntegerField()
    track35 = models.IntegerField()
    track36 = models.IntegerField()
    track37 = models.IntegerField()
    track38 = models.IntegerField()
    track39 = models.IntegerField()
    track40 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name
        
class Test1(models.Model):
#user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    track21 = models.IntegerField()
    track38 = models.IntegerField()
    track5 = models.IntegerField()
    track30 = models.IntegerField()
    track37 = models.IntegerField()
    track26 = models.IntegerField()
    track32 = models.IntegerField()
    track24 = models.IntegerField()
    track36 = models.IntegerField()
    track4 = models.IntegerField()
    track7 = models.IntegerField()
    track28 = models.IntegerField()
    track29 = models.IntegerField()
    track15 = models.IntegerField()
    track3 = models.IntegerField()
    track27 = models.IntegerField()
    track13 = models.IntegerField()
    track19 = models.IntegerField()
    track20 = models.IntegerField()
    track10 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
def publish(self):
    self.published_date = timezone.now()
    self.save()

def __str__(self):
    return self.name
    
class Test2(models.Model):
#user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    track39 = models.IntegerField()
    track22 = models.IntegerField()
    track35 = models.IntegerField()
    track6 = models.IntegerField()
    track34 = models.IntegerField()
    track40 = models.IntegerField()
    track25 = models.IntegerField()
    track14 = models.IntegerField()
    track16 = models.IntegerField()
    track23 = models.IntegerField()
    track11 = models.IntegerField()
    track8 = models.IntegerField()
    track31 = models.IntegerField()
    track1 = models.IntegerField()
    track33 = models.IntegerField()
    track2 = models.IntegerField()
    track12 = models.IntegerField()
    track9 = models.IntegerField()
    track17 = models.IntegerField()
    track18 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
def publish(self):
    self.published_date = timezone.now()
    self.save()

def __str__(self):
    return self.name

class T1(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
def publish(self):
    self.published_date = timezone.now()
    self.save()

def __str__(self):
    return self.name

class T2(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
def publish(self):
    self.published_date = timezone.now()
    self.save()

def __str__(self):
    return self.name

class T3(models.Model):
    #user = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    track1 = models.IntegerField()
    track2 = models.IntegerField()
    track3 = models.IntegerField()
    track4 = models.IntegerField()
    track5 = models.IntegerField()
    correct = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
        
def publish(self):
    self.published_date = timezone.now()
    self.save()

def __str__(self):
    return self.name
