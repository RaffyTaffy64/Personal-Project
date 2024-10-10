import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token') // Clear the token
    navigate('/') // Navigate to Home.jsx
  };

  return <button onClick={handleLogout}>Logout</button>
}

export default Logout


  