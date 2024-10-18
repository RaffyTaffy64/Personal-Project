import { DataTypes, Model } from "sequelize"
import connectToDb from "./db.js"
import util from 'util'

const db = await connectToDb('postgresql://postgres:admin@localhost:5432/users')

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
        unique: true,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    email: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,

    state: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: "CA",
    },

    zipCode: DataTypes.STRING,
    birthdate: DataTypes.STRING,
}, {
    modelName: 'users',
    sequelize: db,
})

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
    
    speaker: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    startTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    endTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    day: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'events',
    sequelize: db,
})


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

export { User, Event, PurchasedEvent }

