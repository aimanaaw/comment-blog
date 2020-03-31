from flask import Blueprint, jsonify, request
from . import db
from .models import Comments
# from flask-server/run.py import socketio, on
from run import socketio
from flask_socketio import send, emit, namespace


main = Blueprint('main', __name__)


@main.route('/add_comments', methods=['POST'])
def add_comments():
  comment_data = request.get_json()
  new_comment = Comments(author=comment_data['author'], note=comment_data['note'], email=comment_data['email'])
  db.session.add(new_comment)
  db.session.commit()
  
  return 'Done', 201


@main.route('/comments')
def comments():
  comment_list = Comments.query.all()

  comments = []
  for comment in comment_list:
    comments.append({'id': comment.id, 'author': comment.author, 'note': comment.note, 'email': comment.email, 'date': comment.date})


  return jsonify({'comments': comments})


# @socketio.on("message")
# def handleMessage(msg):
#   print('User connected' + msg)
#   send(msg)
#   return None



