const handleCheckout = async () => {
    const res = await fetch('/payments/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eventId: 'E1', amount: 8000 })
    })
    const data = await res.json()

    stripe.redirectToCheckout({ sessionId: data.id })
  }
  