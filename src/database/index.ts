require('dotenv').config()
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    define: {
        underscored: true
    }

})

console.log(process.env.DB_PASSWORD);