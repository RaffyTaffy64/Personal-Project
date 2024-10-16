import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Account = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem('id')
        if (!userId) {
            navigate('/login') // Redirect to login if no userId
            return
        }

        axios.get('/api/users/me')
            .then((res) => {
                setUser(res.data) // Save user data
            })
            .catch((err) => {
                console.error('Failed to fetch user data:', err)
                navigate('/login') // Redirect on error
            })
    }, [navigate])

    if (!user) return <div>Loading...</div>

    return (
        <div>
            <h1>Welcome, {user.firstName} {user.lastName}</h1>
            <p>ID: {user.userId}</p>
            <button onClick={() => navigate('/events')}>
                Purchase Events
            </button>
        </div>
    )
}

export default Account

