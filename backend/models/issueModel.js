const mongoose = require('mongoose');

const issueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    issueId:{type: String, required: true},
    issueDesc:{type: String, required:true },
    issueLocationLat:{type:String},
    issueLocationLng:{type:String},
    issueStatus:{type: String, required: true, default:'unsolved'},
    issueImageUrl:{type: String},
    issueVotes:{type:Number,default:0},
    issueContributers:{type:Array}
   


})
module.exports=mongoose.model('issue',issueSchema);