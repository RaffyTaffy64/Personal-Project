import { DataTypes, Model } from 'sequelize'
import util from 'util'
import db from '../config/db.js'

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

User.init({
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  streetAddress: DataTypes.STRING,
  city: DataTypes.STRING,
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
    defaultValue: 'CA',
  },
  zipCode: DataTypes.STRING,
  birthdate: DataTypes.STRING,
}, {
  modelName: 'users',
  sequelize: db,
})

export default User
