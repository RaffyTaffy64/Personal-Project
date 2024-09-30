const fetchEvents = async () => {
  try {
    const res = await fetch('/api/events', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (res.status === 401) {
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
