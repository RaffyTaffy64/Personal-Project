import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'

export const register = async (req, res) => {

  const { firstName, lastName, email, password, state } = req.body

  console.log(req.body)
  
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt)

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      state,
    })

    res.status(201).json({ userId: user.userId, message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const isMatch = bcrypt.compareSync(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.json({ token, user: { userId: user.userId, firstName: user.firstName, lastName: user.lastName } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

