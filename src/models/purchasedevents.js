import { DataTypes, Model } from 'sequelize'
import util from 'util'
import db from '../config/db.js'

class PurchasedEvent extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

PurchasedEvent.init({
  eventId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  eventTitle: DataTypes.STRING,
  price: DataTypes.INTEGER,
}, {
  modelName: 'purchasedEvents',
  sequelize: db,
})

export default PurchasedEvent
