const express=require('express')
const mongoose=require('mongoose')
const parser=require('body-parser')
const morgan=require('morgan')
const app=express();
const port=3000;

mongoose.connect("mongodb+srv://frozencurry:easy@cluster3105-tn8ee.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true},function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("mongoose connected")
    }
})

//const user=require('./routes/user.js')


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use("*",function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods', '*');
    next();
})
console.log("midway")

//app.use('/user',user);


app.listen(port,function(){
    console.log(`Server is listening on ${port}`)
})

