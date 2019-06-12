const mongoose = require('mongoose');

const foodSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reqfood_location:{type: String, required: true},
    person_hungry:{type: Number, required: true, defaul: 0}
})
module.exports=mongoose.model('food',foodSchema);