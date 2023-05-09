const express = require('express')
require('dotenv').config()
const sequalize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({message:'Alright!!!!!!!!!!'})
})

const start = async () => {
    try {
        await sequalize.authenticate()
        await sequalize.sync()
        app.listen(PORT,() => console.log(`Сервер запущен на порте ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()