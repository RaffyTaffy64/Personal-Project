import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login') // Redirect to login if no token
      return
    }

    fetch('/api/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token') // Clear token if unauthorized
          navigate('/login') // Redirect to login
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          console.error(data.error)
        } else {
          setUser(data) // Save user data
        }
      })
      .catch((err) => {
        console.error('Failed to fetch user data:', err)
      })
  }, [navigate])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>Welcome, {user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate('/payment')}>Make a Payment</button>
    </div>
  )
}

export default Account



