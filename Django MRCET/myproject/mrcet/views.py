from django.shortcuts import render,redirect
from .models import Csd

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate, logout

def contact(request):
    c = Csd.objects.all()
    return render(request, 'contact.html', {'csd_list': c})

def details(request, slug):
    csd = Csd.objects.get(slug=slug)  # parameter slug = model slug
    return render(request, 'details.html', {'csd': csd})

def register(request): # User registration view
    if request.method == 'POST':  # Check if the form is submitted
        form = UserCreationForm(request.POST)  # Create a form instance with submitted data
        if form.is_valid(): 
            form.save()
            return redirect("contact")  # Redirect to a list view after successful registration
    else:
        form = UserCreationForm()  # Create a new user registration form
    return render(request, 'register.html', {'form': form})  # Render the registration form





def login(request):  # User login view
    if request.method == 'POST': # Check if the form is submitted
        form = AuthenticationForm(data=request.POST) # Create a form instance with submitted data
        if form.is_valid(): # Validate the form
            # If the form is valid, log in the user
            user = form.get_user() # Get the user from the form
            auth_login(request, user) # Log in the user
            return redirect("contact") # Redirect to the contact page after successful login
    else: # If the request method is GET, create a new authentication form
        form = AuthenticationForm() # Create a new authentication form
    return render(request, 'login.html', {'form': form}) # Render the login form

def logout(request):
    if request.method == 'POST':  # Check if the form is submitted
        logout(request)  # Log out the user
        return redirect("contact")  # Redirect to the contact page after logout
    return render(request, 'logout.html')  # Render the logout confirmation page
# Note: Ensure that 'contact' is a valid URL name in your project, or change it to the appropriate view name you want to redirect to after logout.
