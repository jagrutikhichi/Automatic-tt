from django.shortcuts import render
from .models import Member
# Create your views here.
def index(request):
    return render(request, 'index.html', {}) 

#def Login(request):
  #  if request.method == 'POST':
    
   # else:
   #     from = Authentication
   # return render(request, 'Login.html', {})
 
 #def signup(request):
   # return render(request, 'signup.html', {})

 #def createnew(request):
    # return render(request, 'createnew.html' {})