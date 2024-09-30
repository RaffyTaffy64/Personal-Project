import { Sequelize } from "sequelize"

const connectToDb = async (dbURI) => {
    console.log(`Connecting to DB: ${dbURI}`)

    const sequelize = new Sequelize(dbURI, {
        logging: console.log,
        dialect: 'postgres',
        define: {
            timestamps: false,
            underscored: true,
        },
    })

    try {
        await sequelize.authenticate()
        console.log("Connected to DB successfully")
    } catch (error) {
        console.error("Unable to connect to DB:", error)
    }

    return sequelize
}

export default connectToDb