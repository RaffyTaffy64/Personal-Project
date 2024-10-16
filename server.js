import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './src/config/db.js'
import { register, login } from './src/controllers/authController.js'
import session from 'express-session'
import ViteExpress from 'vite-express'
import { getAllEvents } from './src/controllers/eventController.js'

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
app.get('/api/users/me', (req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user)
    } else {
        res.sendStatus(401)
    }
})

ViteExpress.listen(app, PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))


