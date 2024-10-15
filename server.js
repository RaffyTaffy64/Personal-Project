import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './src/config/db.js'
import { register, login } from './src/controllers/authController.js'
import ViteExpress from 'vite-express'
import session from 'express-session'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001

app.use(cors({
  origin: 'http://http://localhost:5001/Account',
  credentials: true
}))

app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true } // Use true in production with HTTPS
}))

app.post('/api/register', register)
app.post('/api/auth/Login', login)

app.get('/api/users/me', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { userId, firstName, lastName } = req.session.user
  res.status(200).json({ userId, firstName, lastName })
})

ViteExpress.listen(app, PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))

