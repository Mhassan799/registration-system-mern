const express = require('express')
const app = express();

require('dotenv').config({path: './config.env'})

const port = process.env.PORT || 8080
const connectDb = require('./db/db')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const cors =  require('cors')
const path = require('path')

// database calll
connectDb()

// middlewere
app.use(cors())
app.use(express.static(path.join(__dirname,'./client/dist')))
app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/book',bookRoutes)

//rest api

// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname,'./client/dist/index.html'))
// })


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: './config.env'});
  }




app.listen(port, ()=>{
    console.log(`server is runing on ${port}`)
})