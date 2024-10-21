import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../index.css'
import SPARKlogo from '../assets/SPARKlogo.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/auth/login', { email, password })
            if (res.status === 200) {
                localStorage.setItem('id', res.data.userId)
                navigate('/account') // Redirect to Account page
            }
        } catch (error) {
            alert('Login failed')
        }
    }

    return (
        <div className="form-container">
            <img src={SPARKlogo} alt="Spark Logo" className="logo" />
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <br/>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
