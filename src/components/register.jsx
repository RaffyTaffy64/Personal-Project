import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/register', { firstName, lastName, email, password })
            if (res.status === 201) {
                localStorage.setItem('id', res.data.userId)
                navigate('/account') // Redirect to Account page
            }
        } catch (error) {
            alert('Registration failed')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register
