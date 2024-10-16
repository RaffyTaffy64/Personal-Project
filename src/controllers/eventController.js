import Event from '../models/event.js'

export const getAllEvents = async (req, res) => {
  try {
    console.log("hit")
    const events = await Event.findAll()
    console.log(events)
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
