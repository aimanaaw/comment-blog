from flask import Blueprint, jsonify, request
from . import db
from .models import Comments

main = Blueprint('main', __name__)

@main.route('/add_comments', methods=['POST'])
def add_comments():
  comment_data = request.get_json()
  new_comment = Comments(author=comment_data['author'], note=comment_data['note'], email=comment_data['email'], date=comment_data['date'])
  db.session.add(new_comment)
  db.session.commit()
  
  return 'Done', 201

@main.route('/comments')
def comments():

  comments = []

  return jsonify({'comments': comments})