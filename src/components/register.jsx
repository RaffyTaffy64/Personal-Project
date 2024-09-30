const handleRegister = async (e) => {
  e.preventDefault()

  if (password.length < 6) {
    alert('Password should be at least 6 characters')
    return
  }

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })

    const data = await res.json()

    if (res.status === 201) {
      alert('Registered successfully!')
      navigate('/login')
    } else {
      alert(data.errors[0]?.msg || 'Registration failed')
    }
  } catch (error) {
    console.error('Error during registration:', error)
  }
}
