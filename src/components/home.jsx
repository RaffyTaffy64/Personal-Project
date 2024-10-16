import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="home-container">
            <header className="header">
                <img src="path_to_logo_image" alt="DevMountain Logo" className="logo" />
            </header>
            <div className="main-content">
                <h1 className="spark-heading">SPARK</h1>
                <p className="event-info">DevMountain <span className="live-text">LIVE</span> 2024<br />Developers Convention</p>
                <div className="button-group">
                    <button onClick={() => navigate('/register')} className="btn register-btn">Register</button>
                    <button onClick={() => navigate('/login')} className="btn login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Home
