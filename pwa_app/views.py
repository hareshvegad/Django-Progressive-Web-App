from django.shortcuts import render, redirect

# Create your views here.

def LoginPage(request):
    if request.method == 'POST':
        return redirect('dashboard_page')
    
    return render(request, 'login_page.html')

def DashboardPage(request):

    return render(request, 'dashboard_page.html')