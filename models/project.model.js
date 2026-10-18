const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    about:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model('Projects',projectSchema);