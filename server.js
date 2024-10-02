import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './src/config/db.js'
import { register, login } from './src/controllers/authController.js'
import ViteExpress from 'vite-express'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

  app.post(
    '/register',
    register
  )
  
  app.post('/login', login)

  ViteExpress.listen(app, PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
