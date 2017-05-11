from django.shortcuts import render


def HomeView(request):
    my_email = 'glc3344@gmail.com'
    return render(request, 'home.html', {'email': my_email})