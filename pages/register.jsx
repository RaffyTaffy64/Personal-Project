const handleRegister = async (e) => {
    e.preventDefault()
    const res = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password })
    })
    const data = await res.json()
    if (data.success) {
      navigate('/login')
    }
  }
  