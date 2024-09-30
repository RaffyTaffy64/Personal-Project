import Event from '../models/event.js'

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
    res.json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
