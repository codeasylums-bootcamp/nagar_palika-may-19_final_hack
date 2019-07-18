const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const nodemailer=require('nodemailer');
const userModel=require('../models/userModel.js')



let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nagar3.palika',
        subject:'your otp for sign up',
        pass:'nagar!@12'
    }
})

router.get('/',function(req,res){
    userModel.find()
    .exec()
    .then(response=>{
        res.json(response);

    })
})

router.get('/:email', function(req,res){
    const email=req.params.email;
    userModel.findOne({
        email:email
    })
    .then(user=>{
            res.json(user)
    })
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



router.post('/',function(req,res){
    console.log(req.body)
    const newUser=new userModel({
        _id: new mongoose.Types.ObjectId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        dateOfBirth:req.body.dateOfBirth,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,10)
    })
    userModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log(user)
        if(user.length>0)
            res.json({"message":"email exist"})
        else{
            if(req.body.userOtp==val){
            newUser.save();
            res.json({"message": "Account Created"})
            
            }
            else{
                res.json({"message":"wrong otp"})
            }
        }
    }).catch(err=>{
        res.json({"message":`${err}`})
        console.log(err)
    })
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
                    "userName":user.firstname
                    
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

    const userEmail=req.params.email;
    console.log(userEmail)
    const issueTitle=req.body.title;
    console.log(issueTitle)
    userModel.findOne({"email":userEmail})
    .exec()
    .then(user=>{
        console.log("hereee")
        console.log(user)
        user.issueContributed.push(issueTitle)
        userModel.updateOne({"email":userEmail},{$set:{"issueContributed":user.issueContributed}})
        .exec()
        .then(answer=>{
            console.log(answer)
            res.json(answer).status(200);
        })
    
    })



   
})




module.exports=router;

