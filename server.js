/*
    Yang sudah dilakukan :
    1. Mengeset route untuk ('/' dan '/blog)
    2. Berhasil melakukan penginsatalan modul dengan npm express 
    3. Berhasil melakukan penginsatalan modul dengan Nodemon 
    4. Behasil melakukan Conncet dengan mongo DB dengan menggunakan Mongoose
*/ 


const express = require("express");
const app = express();
const mongoose = require('mongoose');


// ROUTES 
app.get('/', (req, res)=>{
    res.send('Hello NODE API');
});

app.get('/blog', (req, res)=>{
    res.send('Hello Blog My name is adeva ');
});




mongoose.connect('mongodb+srv://admin:adeva10MEI2002@testingapiv1.ojgr6ub.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB server')
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000');
    })
}).catch(()=>{
    console.log(error);
})