from flask import Flask, render_template

# instantiate a Flask app object
app = Flask(__name__)

# make the server run in response to `python app.py`
# on port 5001
# and use debug mode so that changing code restarts the app
if __name__ == "__main__":
    app.run(port=5001, debug=True)


# I want separate routes based on the user
@app.route("/")
def board():
    return render_template("index.html")

@app.route("/Mummy")
def board(Mummy):
    return render_template("index.html", board_name=Mummy)

@app.route("/Trouli")
def board(Trouli):
    return render_template("index.html", board_name=Trouli)