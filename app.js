require('dotenv').config()

const db = require('db')
db.connect({
    host:process.env.DB_HOST,
    usernmae: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})