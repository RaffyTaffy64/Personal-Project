import React, { useState, useEffect } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      })

      if (res.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('token')
        window.location.href = '/login'
      }

      const data = await res.json()
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

      const data = await res.json()

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

