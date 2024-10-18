import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './src/config/db.js'
import { register, login } from './src/controllers/authController.js'
import session from 'express-session'
import ViteExpress from 'vite-express'
import { getAllEvents } from './src/controllers/eventController.js'
import { User, Event, PurchasedEvent } from './src/models/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false } 
}))

app.post('/api/register', register)
app.post('/api/auth/login', login)
app.get('/api/events', getAllEvents)
app.get('/api/eventSeed')
app.post('/api/events/purchase', async (req, res) => {
  const {eventId}=req.body
  if (!req.session.user) {
    return res.status(401).send({message:'User not logged in'})
  }
  console.log(req.session.user)
  // Create a new purchased event with userId and eventId
  const newPurchasedEvent=await PurchasedEvent.create({userId:req.session.user.userId, eventId})
  return res.status(200).send({message:"Thank you for your purchase.", newPurchasedEvent})
})
app.get('/api/users/me', (req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user)
    } else {
        res.sendStatus(401)
    }
})

ViteExpress.listen(app, PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))


