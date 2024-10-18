import { DataTypes, Model } from 'sequelize'
import util from 'util'
import db from '../config/db.js'

class PurchasedEvent extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

PurchasedEvent.init({
  purchasedEventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  eventTitle: DataTypes.STRING,
  price: DataTypes.INTEGER,
}, {
  modelName: 'purchased_event',
  sequelize: db,
})

export default PurchasedEvent
