import './Hero.css'
import queryString from "query-string";

// import express from 'express';

function Hero() {
    // var app = express();
    const AUTH_URL = 'https://accounts.spotify.com/authorize?'
    const CLIENT_ID = "3a03b32d42814d589a9600407cdbb1a6";
    const SCOPE = 'user-top-read';

    const login = () => {
        try {
            // Redirect the user to the Spotify login page
            window.location.href = AUTH_URL + queryString.stringify({
                response_type: 'code',
                client_id: CLIENT_ID,
                scope: SCOPE,
                redirect_uri: 'http://localhost:5000/callback'
            })
            
            // req
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    
    return (
        <div className="container">
            <h1>Check your Spotify Wrapped, whenever!</h1>
            <button className="spotify-login" onClick={login}>Login to Spotify</button>
        </div>
    )
}

export default Hero