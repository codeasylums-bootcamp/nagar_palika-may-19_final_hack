const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
//const jwt=require('jsonwebtoken')
const ngoModel=require('../models/ngoModel.js')

router.get('/:email', function(req,res){
    const email=req.params.email;
    ngoModel.findOne({
        email:email
    })
    .then(user=>{
            res.json(user)
    })
})
router.post('/',function(req,res){
    const newNgo=new ngoModel({
        _id: new mongoose.Types.ObjectId,
        ngoName:req.body.ngoName,
        ngoCode:req.body.ngoCode,
        dateOfEstd:req.body.dateOfEstd,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,10)
    })
    ngoModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.json({"message":"email already exist"})
        else{
            newNgo.save();
            res.json({"message": "Account Created"})
        }
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
    })
})

router.post('/login',function(req,res){
    ngoModel.findOne({email:req.body.email})
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

