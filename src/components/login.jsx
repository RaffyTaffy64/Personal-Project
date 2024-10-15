import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
            // console.error('Error during login:', error)
            alert('Login failed')
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login



