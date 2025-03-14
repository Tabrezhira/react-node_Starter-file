const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const uploadRoutes = require('./routes/uploadRouter')

app.use(express.json())
app.use(cors())

dotenv.config()
const Port = process.env.PORT || 3000;
// Connect 
connectDB()

app.get('/', (req,res) => {
    res.send('Welcome to Rabbit API!')
})

// API Routes
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes) // upload files and img








app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})

// module.exports = app;   //unmask for Vercel only 