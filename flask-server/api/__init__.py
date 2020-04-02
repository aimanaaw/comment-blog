import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy_utils import create_database, database_exists
from api.config import config


app = Flask(__name__)

env = os.environ.get("FLASK_ENV", "dev")

app.config.from_object(config[env])

db_url = app.config['SQLALCHEMY_DATABASE_URI']
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

