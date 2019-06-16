const mongoose = require('mongoose');

const staffSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    staffName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,reauired:true},
    issueHandled:{type:Array}
})

module.exports=mongoose.model('staff',staffSchema);