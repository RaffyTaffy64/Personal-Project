import { DataTypes, Model } from "sequelize";
import connectToDb from "./db.js";
import url from 'url';
import util from 'utiil'

const db = await connectToDb('postgresql:///users')

class Users extends Model {
    [util.inspect.custom] () {
        return this.toJSON()
    }
}
User.init({
    userId:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    state: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: "CA"
    },
    zipCode: DataTypes.STRING,
    birthdate: DataTypes.STRING,
  }, {
    modelName: 'users',
    sequelize: db
  }
)

class Events extends Model {
    [util.inspect.custom] () {
    return this.toJSON()
    }
}
Event.init({
    eventId:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    eventTitle: DataTypes.STRING,
    price: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
  }, {
    modelName: 'events',
    sequelize: db
  }
)

class PurchasedEvents extends Model {
    [util.inspect.custom] () {
        return this.toJSON()
    }
}
purchasedEvent.init({
    eventId:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    eventTitle: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    modelName: 'purchasedEvents',
    sequelize: db
  }
)

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log("Syncing database...")
    await db.sync({force: true})
   // await db.sync({})
    console.log("Finished syncing database.")
}

export { Users, Events, PurchasedEvents }