from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy_utils import create_database, database_exists


app = Flask(__name__)

postgres = {
  'user': 'aimanaaw',
  'pw': 'password',
  'db': 'my_database',
  'host': 'localhost',
  'port': '5432'
}
db_url = app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://aimanaaw:password@localhost/testdb'
if not database_exists(db_url):
  create_database(db_url)




from api.models import db
db.init_app(app)
with app.app_context():
  db.create_all()
Migrate(app, db)
from .routes import main
app.register_blueprint(main)

from api import routes

