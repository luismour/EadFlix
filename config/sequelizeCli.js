require('dotenv').config()

module.exports = {
    development: {
        dialect: 'postgres',
        host: process.env.HOST,
        port: 5432,
        database: process.env.DATABASE,
        username: 'postgres',
        password: process.env.PASSWORD
    }
}