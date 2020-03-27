from . import db
from datetime import datetime

class Comments(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  author = db.column(db.string(50))
  note = db.colum(db.string(300))
  email = db.column(db.string(50))
  date = db.Colum(db.DateTime, default=datetime.utcnow)