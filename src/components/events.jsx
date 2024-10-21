import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../index.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const res = await axios.get('/api/events', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            })
console.log(res)
            if (res.status === 401) {
                localStorage.removeItem('token')
                navigate('/login')
            } 

            // const data = await res.json()
            setEvents(res.data)
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }
console.log(events)
    const handlePurchase = async (eventId) => {
      console.log('MISTAKE')
        try {
            const res = await axios.post('/api/events/purchase', {eventId})

            if (res.status === 200) {
                alert('Event purchased successfully!')
            } else {
                alert('Error purchasing event')
            }
        } catch (error) {
            alert('Error purchasing event')
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
                      {event.price && <button onClick={() => handlePurchase(event.eventId)}>Purchase</button>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Events
