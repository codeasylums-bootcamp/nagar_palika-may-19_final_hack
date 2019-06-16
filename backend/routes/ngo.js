const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const nodemailer=require('nodemailer');
//const jwt=require('jsonwebtoken')
const ngoModel=require('../models/ngoModel.js')


let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nagar3.palika',
        pass:'nagar!@12'
    }
})


let val;
router.post('/verify',function(req,res){
     val=1000 + Math.floor(Math.random()*9000);

    let mailOptions = {
        from:'nagar3.palika@gmail.com',
        to:req.body.email,
        text:`your otp is : ${val}`
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log(err);
    })

})

router.get('/:email', function(req,res){
    console.log("into the get request")
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
            if(req.body.ngoOtp==val){
            newNgo.save();
            res.json({"message": "Account Created"})
            }
            else{
                res.json({"message":"Wrong otp"})
            }
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
                    "userName":user.ngoName
                    
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
router.put('/chat/:email',function(req,res){

    const ngoEmail=req.params.email;
    
    const issueTitle=req.body.title;
    console.log(issueTitle)
    ngoModel.findOne({"email":ngoEmail})
    .exec()
    .then(ngo=>{
        console.log("hereeengo")
        console.log(ngo)
        ngo.issueContributed.push(issueTitle)
        ngoModel.updateOne({"email":ngoEmail},{$set:{"issueContributed":ngo.issueContributed}})
        .exec()
        .then(answer=>{
            console.log(answer)
            res.json(answer).status(200);
        })
    
    })



   
})


module.exports=router;

