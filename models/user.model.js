const { default: mongoose } = require("mongoose");
const projectModel = require("./project.model");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'projects'
    }]
},{timestamps:true});

module.exports = mongoose.model('Users',userSchema);