from flask import Blueprint, jsonify, request
from api.models import db, Comments
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

  commentsArray = []
  for eachcomment in comment_list:
    commentsArray.append({'id': eachcomment.id, 'author': eachcomment.author, 'note': eachcomment.note, 'email': eachcomment.email, 'date': eachcomment.date})


  return jsonify({'comments': commentsArray})


# @socketio.on("message")
# def handleMessage(msg):
#   print('User connected' + msg)
#   send(msg)
#   return None



