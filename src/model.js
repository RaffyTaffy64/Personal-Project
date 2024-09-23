import { DataTypes, Model } from "sequelize"
import connectToDb from "./db.js"
import url from 'url'
import util from 'util'

const db = await connectToDb('postgresql:///users')

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
});

class Event extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Event.init({
    eventId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    eventTitle: DataTypes.STRING,
    price: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
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

async function seedDatabase() {
    console.log("Syncing database...")
    await db.sync({ force: true })
    
    console.log("Seeding users...")
    await User.bulkCreate([

        {
            userId: '1',
            firstName: 'Sean',
            lastName: 'Fagan',
            password: 'boromir',
            email: 'lofimusicguy@gmail.com',
            streetAddress: '123 Main St',
            state: 'CA',
            zipCode: '90210',
            birthdate: '1990-07-04'
        },

        {
            userId: '2',
            firstName: 'Chelsea',
            lastName: 'Allen',
            password: 'byurocks',
            email: 'byuchels@gmail.com',
            streetAddress: '456 Oak St',
            state: 'UT',
            zipCode: '84601',
            birthdate: '1983-10-31'
        },

        {
            userId: '3',
            firstName: 'Rafa',
            lastName: 'Raeder',
            password: 'RaffyTaffy',
            email: 'rraeder@gmail.com',
            streetAddress: '1589 Grizzly Way',
            state: 'UT',
            zipCode: '84651',
            birthdate: '1982-11-11'
        }
    ])

    console.log("Seeding events...")
    await Event.bulkCreate([

        {
            eventId: 'E1',
            eventTitle: 'Women in Tech Luncheon',
            price: 80,
            startTime: '2024-09-30T13:00:00',
            endTime: '2024-09-30T15:00:00'
        },

        {
            eventId: 'E2',
            eventTitle: 'Special Guest Speakers',
            price: 100,
            startTime: '2024-09-29T18:00:00',
            endTime: '2024-09-29T20:30:00'
        },

        {
            eventId: 'E3',
            eventTitle: 'Recognition Dinner',
            price: 50,
            startTime: '2024-09-30T19:00:00',
            endTime: '2024-09-30T21:30:00'
        }
    ])

    console.log("Seeding purchased events...")
    await PurchasedEvent.bulkCreate([

        {
            eventId: 'E1',
            eventTitle: 'Women in Tech Luncheon',
            price: 80,
        },

        {
            eventId: 'E2',
            eventTitle: 'Special Guest Speakers',
            price: 100,
        },

        {
            eventId: 'E3',
            eventTitle: 'Recognition Dinner',
            price: 50,
        }
    ])

    console.log("Finished seeding database.")
}

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    await seedDatabase()
}

export { User, Event, PurchasedEvent }
