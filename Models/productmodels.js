/* 
    Pada file berikut ini merupakan sebuah model yang nantinya akan digunakan sebagai pengiriman 
    data yang disimpan sesuai dengan schema yang sudah di deklarasikan yakni di dalam product 
    Schema terdapat berbagai macam data yakni ada : nama, quantity , price , dan image.
*/


const mongoose = require('mongoose');


const productsSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'please enter a product name']
        },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)


const product = mongoose.model('Product' , productsSchema);


module.exports = product;