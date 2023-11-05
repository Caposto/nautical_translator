require('dotenv').config()
const express = require('express')
const cors = require('cors')
const requestRoutes = require('./routes/requestRoutes')
const health = require('./routes/health')
const corsOptions = require('./config/corsOptions')
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/request', requestRoutes);
app.use('/health', health);

app.listen(process.env.PORT, () => (console.log(`Server is running on ${process.env.PORT}`)))