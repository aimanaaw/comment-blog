from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

postgres = {
  'user': 'aimanaaw',
  'pw': 'password',
  'db': 'my_database',
  'host': 'localhost',
  'port': '5432'
}
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://aimanaaw:password@localhost/my_database'


db = SQLAlchemy(app)
db.init_app(app)
from .routes import main
app.register_blueprint(main)

from api import routes

