import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.userId
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}
