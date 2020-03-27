from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/add_comments', methods=['POST'])
def add_comments():
  
  return 'Done', 201

@main.route('/comments')
def comments():

  comments = []

  return jsonify({'comments': comments})