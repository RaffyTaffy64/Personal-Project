import React, { useState, useEffect } from 'react'

const Account = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/users/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token')
          window.location.href = '/login'
        }
        return res.json()
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>Welcome, {user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      {/* Display other account details */}
    </div>
  )
}

export default Account

