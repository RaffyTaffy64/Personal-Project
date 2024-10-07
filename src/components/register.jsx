import React, { useState } from 'react'
import '../index.css'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    id: '',
    street: '',
    country: 'United States',
    state: '',
    city: '',
    dateOfBirth: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="register-container">
      <header className="header">
        <img src="path_to_logo_image" alt="DevMountain Logo" className="logo" />
      </header>
      <div className="form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          {/* Form fields */}
          <button type="submit" className="btn submit-btn">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default Register


