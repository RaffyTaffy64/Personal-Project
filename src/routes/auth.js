import express from 'express'
import { check } from 'express-validator'
import { register, login } from '../controllers/authController.js'

const router = express.Router()

router.post(
  '/register',
  [
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password should be at least 6 characters').isLength({ min: 6 }),
  ],
  register
)

router.post('/login', login)

export default router
