const fetchEvents = async () => {
    const res = await fetch('/events')
    const data = await res.json()
    setEvents(data)
  }
  
  const handlePurchase = async (eventId) => {
    const res = await fetch('/events/purchase', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eventId })
    })
    const data = await res.json()
    if (data.success) {
      alert('Event purchased successfully!')
    }
  }
  