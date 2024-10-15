import bcrypt from 'bcryptjs'
import { User } from '../models/index.js'

export const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        req.session.user = user
        res.status(201).json({ userId: user.userId, message: 'User registered successfully' })
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ where: { email } })
        if (!user) return res.status(404).json({ message: 'User not found' })

        const isMatch = bcrypt.compareSync(password, user.password)
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

        req.session.user = user
        res.status(200).json({ userId: user.userId, message: 'Login successful' })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}


