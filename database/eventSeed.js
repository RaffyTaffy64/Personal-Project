import {Event, User} from "../src/models/index.js"
import db from "../src/config/db.js"
import PurchasedEvent from "../src/models/purchasedevents.js"
import bcrypt from 'bcryptjs'

const events = [
    {
        eventID: 1,
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Scott Sutherland',
        location: 'Grand Ballroom',
        day: 'Wednesday'
    },
    {
        eventID: 2,
        eventTitle: 'Regional Meeting',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        speaker: 'Area Developers',
        location: 'Various Halls',
        day: 'Wednesday'
    },
    {
        eventID: 3,
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Kyle Baugh',
        location: 'Grand Ballroom',
        day: 'Thursday'
    },
    {
        eventID: 4,
        eventTitle: 'Special Guest Speakers',
        startTime: '6:00 PM',
        endTime: '8:30 PM',
        speaker: 'Elon Musk and Mark Zuckerberg',
        location: 'Grand Ballroom',
        day: 'Thursday',
        price: 100
    },
    {
        eventID: 5,
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Erica Guarneri',
        location: 'Grand Ballroom',
        day: 'Friday'
    },
    {
        eventID: 6,
        eventTitle: 'Women in Tech Luncheon',
        startTime: '1:00 PM',
        endTime: '3:00 PM',
        speaker: '',
        location: 'Halls A & B',
        day: 'Friday',
        price: 80
    },
    {
        eventID: 7,
        eventTitle: 'Regional Meetings',
        startTime: '4:00 PM',
        endTime: '6:00 PM',
        speaker: 'Area Executives',
        location: 'Various Halls',
        day: 'Friday'
    },
    {
        eventID: 8,
        eventTitle: 'Recognition Dinner',
        startTime: '7:00 PM',
        endTime: '9:30 PM',
        speaker: '',
        location: 'Halls A & B',
        day: 'Friday',
        price: 50
    },
]

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync("billie", salt)
const users = [
    {
        firstName: "Rafael",
        lastName: "Raeder",
        email: "raffytaffy@gmail.com",
        password: hashedPassword,
    }
]

await db.sync({force:true})

await User.bulkCreate(users)
await Event.bulkCreate(events)

await db.close()