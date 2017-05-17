from django.core.mail import EmailMessage
from django.contrib import messages
from django.shortcuts import render
from django.template.loader import get_template

from NewPortfolio.forms import ContactForm


def HomeView(request):
    form_class = ContactForm

    form_class = ContactForm

    # new logic!
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get('contact_name', '')
            contact_email = request.POST.get('contact_email', '')
            form_content = request.POST.get('content', '')

            # Email the profile with the
            # contact information
            template = get_template('contact_template.txt')
            context = {
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            }
            content = template.render(context)

            email = EmailMessage(
                "New contact form submission",
                content,
                "Your website" + '',
                ['youremail@gmail.com'],
                headers={'Reply-To': contact_email}
            )
            email.send()
            messages.success(request, 'Thanks for the message!')
        else:
            messages.error(request, 'All fields are required!')


    return render(request, 'home.html', {'form': form_class})
