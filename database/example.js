// import { User, Event, PurchasedEvent } from "./model.js"
import bcryptjs from 'bcryptjs'

// (async () => {
//     console.log("Syncing database...")
//     await User.sequelize.sync({ force: true })
    
//     const user = await User.create({
//         userId: '4',
//         firstName: 'Emmett',
//         lastName: 'Brown',
//         password: '88mph',
//         email: 'greatscott@gmail.com',
//         streetAddress: '1640 Riverside Drive',
//         city: 'Hill Valley',
//         state: 'CA',
//         zipCode: '95420',
//         birthdate: '1920-10-12'
//     })

//     console.log(user.toJSON())
// })()

// const user = await User.create({
//     firstName: "A",
//     lastName: "B",
//     email: "a@a.com"
// })

await db.close()