const mongoose = require('mongoose');

const issueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    issueId:{type: String, required: true},
    issueDesc:{type: String, required:true },
    issueLocation:{type:Array},
    issueStatus:{type: String, required: true, default:'unsolved'},
    issueImageUrl:{type: String}
   


})
module.exports=mongoose.model('issue',issueSchema);