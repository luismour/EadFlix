require('dotenv').config()

module.exports = {
    development: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        database: process.env.DB_DATABASE,
        username: 'postgres',
        password: process.env.DB_PASSWORD,
    }
}

