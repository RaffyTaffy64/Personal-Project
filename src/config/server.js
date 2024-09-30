import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import db from './config/db.js'

import authRoutes from './routes/auth.js'
import eventRoutes from './routes/events.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err))

db.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Sync error: ' + err))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
