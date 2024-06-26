import time
from flask import Flask, session, flash, redirect, url_for, request, jsonify
import requests
from flask_cors import CORS
import spotipy
from flask_session import Session
from spotipy.oauth2 import SpotifyOAuth


app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config["SESSION_PERMANENT"] = False
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

AUTH_URL = 'https://accounts.spotify.com/authorize'
TOKEN_URL = 'https://accounts.spotify.com/api/token'
BASE_URL = 'https://api.spotify.com/v1/'
CLIENT_ID = "3a03b32d42814d589a9600407cdbb1a6"
CLIENT_SECRET = "00fc2b1327434febb53cef81025a6599"

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route('/')
def index():
    return jsonify({"code": 200})

@app.route('/login')
def login():
    pass

@app.route('/callback')
def redirectPage():
    sp_auth = create_oauth()
    session.clear()
    code = request.args.get('code')
    token_data = sp_auth.get_access_token(code)
    session["token_info"] = token_data
    print(token_data)
    print("HELLOOOOOO")
    if code and token_data:
        return redirect('http://localhost:5173/short_term')
    else:
        return redirect(url_for("http://localhost:5173/error"))

@app.route('/songs')
def getSongs():
    session['token_info'], authorized = get_token()
    session.modified = True
    
    if not authorized:
        return jsonify({"message": "Not logged in"}, 403)
    
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    range = request.args.get('range') 
    if not range:
        range = "short_term"
    
    songs = sp.current_user_top_tracks(limit=23, time_range=range)

    return jsonify({"songs" : songs}, 200)
    
@app.route('/artists')
def getArtists():
    session['token_info'], authorized = get_token()
    session.modified = True
    
    if not authorized:
        return jsonify({"message": "not logged in", "code": 403})
    
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    range = request.args.get('range')
    if not range:
        range = "short_term"
        
    artists = sp.current_user_top_artists(limit=50, time_range=range)
    
    return jsonify(artists, 200)

def create_oauth():
    return SpotifyOAuth(
        client_id=CLIENT_ID,
        client_secret=CLIENT_SECRET,
        redirect_uri="http://localhost:5000/callback",
        scope="user-top-read"
    )

def get_token():
    valid = False
    token_data = session.get('token_info', {})
    
    if not (session.get('token_info', False)):
        valid = False
        return token_data, valid
    
    now = int(time.time())
    is_expired = session.get('token_info').get('expires_at') - now < 60
    
    if (is_expired):
        sp_oauth = create_oauth()
        token_data = sp_oauth.refresh_access_token(session.get('token_info').get('refresh_token'))
        
    valid = True
    return token_data, valid