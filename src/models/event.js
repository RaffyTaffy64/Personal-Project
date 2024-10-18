import { DataTypes, Model } from 'sequelize'
import util from 'util'
import db from '../config/db.js'

class Event extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Event.init({
  eventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  eventTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  startTime: DataTypes.STRING,
  endTime: DataTypes.STRING,
}, {
  modelName: 'events',
  sequelize: db,
})

export default Event
