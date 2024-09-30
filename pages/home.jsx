useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  