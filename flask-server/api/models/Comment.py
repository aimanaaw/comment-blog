from .base import db
from datetime import datetime


class Comments(db.Model):
  
  __tablename__ = "comments"
  id = db.Column(db.Integer, primary_key=True)
  author = db.Column(db.String(50))
  note = db.Column(db.String(300))
  email = db.Column(db.String(50))
  date = db.Column(db.DateTime, default=datetime.now)

  def __init__(self, author, note, email):
    self.author = author
    self.note = note
    self.email = email

  def __repr__(self):
    return f"Comment{self.note} by {self.author} at {self.date}"
