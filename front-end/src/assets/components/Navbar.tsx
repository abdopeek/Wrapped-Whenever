import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="buttons-container">
                <div className="songs-btn">Songs</div>
                <div className="artists-btn">Artists</div>
            </div>
        </nav>
    )
}

export default Navbar