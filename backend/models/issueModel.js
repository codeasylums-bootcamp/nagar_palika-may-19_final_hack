const mongoose = require('mongoose');

const issueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname:{type: String, required: true},
    lastname:{type: String, required: true}
   


})
module.exports=mongoose.model('issue',issueSchema);