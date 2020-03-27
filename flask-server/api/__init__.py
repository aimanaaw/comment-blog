from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# app = Flask(__name__)

# @app.route("/")
# def homepage():
#   return "Homepage"

# if __name__ == '__main__':
#   app.run(debug=True, host='0.0.0.0')

db = SQLAlchemy()
postgres = {
  'user': 'aimanaaw',
  'pw': 'password',
  'db': 'my_database',
  'host': 'localhost',
  'port': '5432'
}

def create_app():
  app = Flask(__name__)

  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://aimanaaw:password@localhost/my_database'

  db.init_app(app)

  from .views import main
  app.register_blueprint(main)

  return app