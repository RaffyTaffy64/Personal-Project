import express from 'express'
import { getAllEvents } from '../controllers/eventController.js'
import { verifyToken } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', verifyToken, getAllEvents)

export default router
