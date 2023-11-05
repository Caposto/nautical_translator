require('dotenv').config()
const express = require('express')
const cors = require('cors')
const requestRoutes = require('./routes/requestRoutes')
const app = express()

app.use(express.json())
app.use('/request', requestRoutes)

app.listen(process.env.PORT, () => (console.log(`Server is running on ${process.env.PORT}`)))