const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel.js')

router.get('/:email', function(req,res){
    const email=req.params.email;
    userModel.findOne({
        email:email
    })
    .then(user=>{
            res.json(user)
    })
})
router.post('/',function(req,res){
    console.log("inside post")
    const newUser=new userModel({
        _id: new mongoose.Types.ObjectId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        dateofBirth:req.body.dateofBirth,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,10)
    })
    userModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.json({"message":"email exist"})
        else{
            newUser.save();
            res.json({"message": "Account Created"})
        }
    }).catch
})

router.post('/login',function(req,res){
    userModel.findOne({email:req.body.email})
    .exec()
    .then(user=>{
        if(user!=null)
        {
            if(bcryptjs.compareSync(req.body.password,user.password))
            {
               
                res.json({
                    "message":"Authentication successful",
                    
                }).status(200)
                console.log("last");
            }
            else{
                res.json({"mesaage":"Authentication failed"})
            }
        }
        else{
            res.json({"message":"Authentication failed"})
        }
    })
})



module.exports=router;

