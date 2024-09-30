useEffect(() => {
    fetch('/users/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  