const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[8,"Price cannot exceed from 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
                {
                    public_id:{
                        type:String,
                        required:true
                    },
                    url:{
                        type:String,
                        required:true
                    }
                }
            ],
    category:{
        type:String,
        required:[true,"Please enter product category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please enter product Stock"],
        maxLength:[4,"The stock number can not exceed by 4 digits"],
        default:1
        },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("product",productSchema)