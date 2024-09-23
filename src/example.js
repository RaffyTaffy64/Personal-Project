import { User } from "./model.js"

const user = await User.create({
    userId: '4',
    firstName: 'Emmett',
    lastName: 'Brown',
    password: '88mph',
    email: 'greatscott@gmail.com',
    streetAddress: '1640 Riverside Drive',
    city: 'Hill Valley',
    state: 'CA',
    zipCode: '95420',
    birthdate: '1920-10-12'
})

console.log(user)

