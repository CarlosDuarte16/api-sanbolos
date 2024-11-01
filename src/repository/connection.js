import mysql from 'mysql2/promise'
import 'dotenv/config.js'

const con =  await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PWD,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT
})
console.log('conectado') 

export default con    