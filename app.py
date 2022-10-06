from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/alias")
def mostrar_usuario():
    return jsonify({
        "alias":"fookziman"
    })
    
if __name__ == "__name__":
    app.run(debug=True)
         