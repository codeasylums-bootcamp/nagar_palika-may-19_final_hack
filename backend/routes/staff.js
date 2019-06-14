const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const staffModel=require('../models/staffModel.js')

router.get('/:email', function(req,res){
    const email=req.params.email;
    staffModel.findOne({
        email:email
    })
    .then(user=>{
            res.json(user)
    })
})
router.post('/',function(req,res){
    const newStaff=new staffModel({
        _id: new mongoose.Types.ObjectId,
        staffName:req.body.staffName,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,10)
    })
    staffModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.json({"message":"email already exist"})
        else{
            newStaff.save();
            res.json({"message": "Account Created"})
        }
    }).catch(err=>{
        res.json({"message":"Auth Failed"})
    })
})

router.post('/login',function(req,res){
    staffModel.findOne({email:req.body.email})
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

