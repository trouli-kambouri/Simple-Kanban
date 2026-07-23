from flask import Flask, render_template
from lib.database_connection import get_flask_database_connection

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=5001, debug=True)