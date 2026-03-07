from ninja import NinjaAPI, Schema
from .models import Student, Lead, Group
from typing import List

api = NinjaAPI(title="Markaz Pro API", version="1.0.0")

class LeadIn(Schema):
    name: str
    phone: str

@api.post("/leads/add")
def add_lead(request, data: LeadIn):
    Lead.objects.create(**data.dict())
    return {"status": "success"}

@api.get("/stats")
def get_stats(request):
    return {
        "total_students": Student.objects.count(),
        "total_leads": Lead.objects.count()
    }