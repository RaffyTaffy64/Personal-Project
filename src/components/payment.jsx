import React, { useState } from 'react'
import '../index.css'

const Payment = () => {
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    cardType: 'VISA',
    billingZip: '',
    street: '',
    country: 'United States',
    state: '',
    city: '',
    sameAsPersonal: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="payment-container">
      <header className="header">
        <img src="path_to_logo_image" alt="DevMountain Logo" className="logo" />
      </header>
      <div className="form-container">
        <h2>Billing Information</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          {/* Form fields */}
          <button type="submit" className="btn finish-btn">Finish</button>
        </form>
      </div>
    </div>
  )
}

export default Payment

