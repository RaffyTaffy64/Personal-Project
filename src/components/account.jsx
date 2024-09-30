useEffect(() => {
  fetch('/api/users/me', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/login'
      }
      return res.json()
    })
    .then((data) => setUser(data))
    .catch((err) => console.error(err))
}, [])
