from django.db import models

# Create your models here.

class Csd(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.IntegerField()
    slug = models.SlugField(unique=True,null=True, blank=True)
    photo = models.ImageField(upload_to='photos/', null=True)
    # blank=True allows the field to be optional
    # null=True allows the field to be stored as NULL in the database
    
    def __str__(self):
        return f"{self.name} - {self.roll_no}"