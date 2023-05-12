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