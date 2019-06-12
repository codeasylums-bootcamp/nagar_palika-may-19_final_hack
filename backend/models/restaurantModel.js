const mongoose = require('mongoose');

const restSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rest_id:{type: String, required: true},
    rest_location:{type: String, required: true},
    food_available:{type: Number, required: true, defaul: 0},// number of persons that can be fed
    rest_rating:{type: Number, required: true}


})
module.exports=mongoose.model('rest',restSchema);