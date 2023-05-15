/*
    Yang sudah dilakukan :
    1. Mengeset route untuk ('/' dan '/blog)
    2. Berhasil melakukan penginsatalan modul dengan npm express 
    3. Berhasil melakukan penginsatalan modul dengan Nodemon 
    4. Behasil melakukan Conncet dengan mongo DB dengan menggunakan Mongoose
    5. Berhasil memasukkan model schema
    6. Berhasil melakukan test post Json product & Masuk dalam MongoDB
    7. [] Fetch data or get data from Database
    8. Update or Edit Data in Database

    semua REST API dilakukan 

*/ 

const Product = require('./Models/productmodels');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const product = require('./Models/productmodels');


app.use(express.json())

// ROUTES 
app.get('/', (req, res)=>{
    res.send('Hello NODE API');
});

app.get('/blog', (req, res)=>{
    res.send('Hello Blog My name is adeva ');
});

app.get('/products', async(req, res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/products/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/products', async(req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// UPDATE
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)

        //if cannot find a product in database
        if(!product){
            return res.status(404).json({message: `cannot find product with id ${id}`});
        }
        const updateproduct = await Product.findById(id);
        res.status(200).json(updateproduct);

    } catch (error) {
        res.status(500).json({message: error.message});

    }
})


mongoose.set("strictQuery",false)
mongoose.
connect('mongodb+srv://admin:adeva10MEI2002@testingapiv1.ojgr6ub.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB server')
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000');
    })
}).catch(()=>{
    console.log(error);
})