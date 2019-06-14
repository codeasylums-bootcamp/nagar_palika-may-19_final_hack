const mongoose = require('mongoose');

const ngoSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ngoName:{type:String,required:true},
    ngoCode:{type:String,required:true},
    dateOfEstd:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,reauired:true},
    issueDone:{type:Array},
    rating:{type:Number}
})

module.exports=mongoose.model('ngo',ngoSchema);