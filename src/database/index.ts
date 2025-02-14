require('dotenv').config()
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    port: 5432,
    database: process.env.DATABASE,
    username: 'postgres',
    password: process.env.PASSWORD,
    define: {
        underscored: true
    }

})