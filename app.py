from flask import Flask, render_template
from lib.database_connection import DatabaseConnection
from lib.user import User
from lib.user_repository import UserRepository
from lib.task import Task
from lib.task_repository import TaskRepository

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def home():
    return render_template("index.html")

@app.route("/login", methods = ['GET'])
def login():
    return render_template("login.html")

@app.route("/register", methods = ['GET'])
def register():
    return render_template("register.html")

if __name__ == "__main__":
    app.run(port=5001, debug=True)