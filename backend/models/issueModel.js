const mongoose = require('mongoose');

const issueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    issue_id:{type: String, required: true},
    issue_disc:{type: String, required:true },
    issue_location:{type: String, required: true},
    issue_status:{type: Boolean, required: true, defaul: 0} //0 for unsolved 1 for solved
   


})
module.exports=mongoose.model('issue',issueSchema);