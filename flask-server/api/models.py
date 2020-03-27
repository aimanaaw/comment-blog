from . import db
from datetime import datetime

# class Comments(db.Model):
#   id = db.Column(db.Integer, primary_key=True)
#   author = db.Column(db.String(50))
#   note = db.Column(db.String(300))
#   email = db.Column(db.String(50))
#   date = db.Column(db.DateTime, default=datetime.utcnow)

class Comments(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  author = db.Column(db.String(50))
  note = db.Column(db.String(300))
  email = db.Column(db.String(50))
  date = db.Column(db.DateTime, default=datetime.utcnow)

  def __init__(self, author, note, email, date):
    self.author = author
    self.note = note
    self.email = email
    self.date = date

  def __repr__(self):
    return f"Comment{self.note} by {self.author} at {self.date}"