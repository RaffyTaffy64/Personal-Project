import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const Register = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [errorMessage, setErrorMessage] = useState('') // State for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      password,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      birthdate,
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json()
      
      if (response.ok) {
        localStorage.setItem('token', data.token) // Save the token to localStorage
        navigate('/account') // Redirect to Account page
      } else {
        setErrorMessage(data.error || 'Registration failed') // Set error message from response or default
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="register-container">
      <header className="header">
        <img src="path_to_logo_image" alt="DevMountain Logo" className="logo" />
      </header>
      <div className="form-container">
        <h2>Create an Account</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="register-form">
          <label>First Name:
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </label>
          <label>Last Name:
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </label>
          <label>Email:
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>Password:
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          <label>Street Address:
            <input 
              type="text" 
              name="streetAddress" 
              value={streetAddress} 
              onChange={(e) => setStreetAddress(e.target.value)} 
            />
          </label>
          <label>City:
            <input 
              type="text" 
              name="city" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </label>
          <label>State:
            <input 
              type="text" 
              name="state" 
              value={state} 
              onChange={(e) => setState(e.target.value)} 
            />
          </label>
          <label>Zip Code:
            <input 
              type="text" 
              name="zipCode" 
              value={zipCode} 
              onChange={(e) => setZipCode(e.target.value)} 
            />
          </label>
          <label>Birthdate:
            <input 
              type="date" 
              name="birthdate" 
              value={birthdate} 
              onChange={(e) => setBirthdate(e.target.value)} 
            />
          </label>
          <button type="submit" className="btn submit-btn">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default Register




