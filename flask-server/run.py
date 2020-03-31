from api import app
from flask_socketio import SocketIO, send

socketio = SocketIO(app, debug=True, cors_allowed_origins="*", host = '0.0.0.0')

@socketio.on("message")
def handleMessage(msg):
  print('User connected')
  send(msg, broadcast=True)
  return None


if __name__ == '__main__':
    socketio.run(app)
    # socket = SocketIO(app, debug=True, cors_allowed_origins="*")