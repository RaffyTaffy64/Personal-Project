import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Events = () => {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }

    try {
      const res = await fetch('/api/events', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      console.log('Response status:', res.status)

      if (res.status === 401) {
        localStorage.removeItem('token')
        navigate('/login')
        return
      }

      const data = await res.json()
      console.log('Fetched events:', data)
      setEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const handlePurchase = async (eventId) => {
    try {
      const res = await fetch('/api/events/purchase', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
      })

      if (res.status === 200) {
        alert('Event purchased successfully!')
      } else {
        alert('Error purchasing event')
      }
    } catch (error) {
      console.error('Error during purchase:', error)
    }
  }

  return (
    <div>
      <h1>Available Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.eventId}>
            {event.eventTitle} - ${event.price}
            <button onClick={() => handlePurchase(event.eventId)}>Purchase</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Events



