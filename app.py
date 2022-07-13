from boggle import Boggle
from flask import Flask, request, render_template, jsonify, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route("/")
def homepage():
    """Generate Boggle board"""
    board = boggle_game.make_board()
    session['board'] = board

    return render_template("board.html", board=board)