import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userId = localStorage.getItem('id')
    if (!userId) {
      navigate('/Login') // Redirect to login if no token
      return
    }
  
    fetch('/api/users/me', {
      headers: {
        'Authorization': `Bearer ${id}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then(text => {
            console.error('Error response:', text) // Log the response text for debugging
            throw new Error('Failed to fetch user data')
          })
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          setUser(data); // Save user data
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
      <button onClick={() => navigate('/Payment')}>Make a Payment</button>
    </div>
  )
}

export default Account



