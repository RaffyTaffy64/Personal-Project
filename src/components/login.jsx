const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.status === 200) {
      localStorage.setItem('token', data.token)
      navigate('/account')
    } else {
      alert(data.error || 'Login failed')
    }
  } catch (error) {
    console.error('Error during login:', error)
  }
}
