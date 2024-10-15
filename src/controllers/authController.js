import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'

export const register = async (req, res) => {
  const { firstName, lastName, email, password, state } = req.body

  try {
    // Validate input data
    if (!firstName || !lastName || !email || !password || !state) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const salt = bcryptjs.genSaltSync(10)
    const hashedPassword = bcryptjs.hashSync(password, salt)

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      state,
    })

    req.session.user = user; // Set session user

    res.status(201).json({ userId: user.userId, message: 'User registered successfully' })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: error.message })
  }
}


// Create a function that sends the user information back to Account.jsx and insert it here

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })
console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isMatch = bcryptjs.compareSync(password, user.password)
    console.log(isMatch)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const userId = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    req.session.user=user

    console.log(user)
    res.status(200).json({ userId, user: { userId: user.userId, firstName: user.firstName, lastName: user.lastName } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

