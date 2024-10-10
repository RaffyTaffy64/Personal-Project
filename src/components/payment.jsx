import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const Payment = () => {
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
    billingZip: '',
    street: '',
    country: 'United States',
    state: '',
    city: '',
    sameAsPersonal: false,
  })
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    navigate('/Account')
  }

  return (
    <div className="payment-container">
      <header className="header">
        <img src="path_to_logo_image" alt="DevMountain Logo" className="logo" />
      </header>
      <div className="form-container">
        <h2>Billing Information</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <label>
            Name on Card:
            <input 
              type="text" 
              name="nameOnCard" 
              value={formData.nameOnCard} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Card Number:
            <input 
              type="text" 
              name="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            CVV:
            <input 
              type="text" 
              name="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Expiration Date:
            <input 
              type="month" 
              name="expirationDate" 
              value={formData.expirationDate} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Billing ZIP Code:
            <input 
              type="text" 
              name="billingZip" 
              value={formData.billingZip} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Billing Street Address:
            <input 
              type="text" 
              name="street" 
              value={formData.street} 
              onChange={handleChange} 
            />
          </label>
          <label>
            City:
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
            />
          </label>
          <label>
            State:
            <input 
              type="text" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
            />
          </label>
          <label>
            <input 
              type="checkbox" 
              name="sameAsPersonal" 
              checked={formData.sameAsPersonal} 
              onChange={handleChange} 
            />
            Billing address is the same as personal address
          </label>
          <button type="submit" className="btn finish-btn">Finish</button>
        </form>
      </div>
    </div>
  )
}

export default Payment




