import React from 'react';
import '../CSS/Login.css';
import { loginUrl } from "./Spotify";

const Login = () => {
    return (
        <div className="loginContainer">
            
            {/* Spotify Logo */}
            <img src={`${process.env.PUBLIC_URL}/assets/spotify_logo_green.png`} alt='Spotify Logo' />
            
            {/* Login with Spotify button */}
            <a href={loginUrl}>Login with Spotify</a>

        </div>
    );
}

export default Login;