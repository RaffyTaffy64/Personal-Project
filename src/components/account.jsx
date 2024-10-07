import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/users/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token')
          navigate('/login')
        }
        return res.json()
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
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


