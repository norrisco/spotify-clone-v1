import React from 'react';
import '../CSS/Login.css';

const Login = () => {
    return (
        <div className="loginContainer">
            
            {/* Spotify Logo */}
            <img src={`${process.env.PUBLIC_URL}/assets/spotify_logo_green.png`} alt="Spotify Logo" />
            
            {/* Login with Spotify button */}
            <a>Login with Spotify</a>

        </div>
    );
}

export default Login;