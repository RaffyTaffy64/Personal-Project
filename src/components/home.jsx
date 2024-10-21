import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import SPARKlogo from '../assets/SPARKlogo.png'
import DevMountainLogo from '../assets/DevMountainLogo.png'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="home-container">
            <header className="header">
                <div>
                    <img src={DevMountainLogo} alt="DevMountain Logo" className="logo" />
                </div>
            </header>
                <div>
                    <img src={SPARKlogo} alt="Spark Logo" className="logo" />
                </div>
            <div className="main-content">
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
