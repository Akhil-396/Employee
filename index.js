const express = require('express')
const mongoose = require('mongoose');
const homeRoute=require('./routes/home')

const employee=require('./models/employer')
const app = express()
const bodyParser=require('body-parser')


const port = 3008

mongoose.connect('mongodb://localhost:27017/employee',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',()=> console.log("Something went wrong for connect database"));
db.once('open',() =>{
    console.log("Database connected");
})
app.set('view engine','ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



app.use('/',homeRoute)

app.listen(port, () => {
  console.log(`Employee app listening on port ${port}`)
})