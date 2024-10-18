import User from './users.js'
import Event from './event.js'
import PurchasedEvent from './purchasedevents.js'

User.hasMany(PurchasedEvent, {foreignKey:'userId'})
PurchasedEvent.belongsTo(User, {foreignKey:'userId'})

Event.hasMany(PurchasedEvent, {foreignKey:'eventId'})
PurchasedEvent.belongsTo(Event, {foreignKey: 'eventId'})

export { User, Event, PurchasedEvent }
