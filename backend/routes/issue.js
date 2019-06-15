const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

//const jwt=require('jsonwebtoken');
const issueModel=require('../models/issueModel.js');


router.post('/', upload.single('issueImage'),function(req,res){
    
    const newIssue=new issueModel({
        _id: new mongoose.Types.ObjectId(),
        issueId:req.body.issueId,
        issueDesc:req.body.issueDesc,
        issueLocationLat:req.body.issueLocationLat,
        issueLocationLng:req.body.issueLocationLng,
        //issueStatus:req.body.issueStatus,
        issueImageUrl:req.file.path

        
        
    })
    newIssue.save()
    .then(function(response){
        res.json('issue reported successfully').status(200);

        console.log(response)
        console.log("issue reported succesfully")
         
    }).catch(err=>{
        console.log(err);
    })

})


router.get("/",(req,res)=>{
    issueModel.find()
    .exec()
    .then(issue=>{
        res.json(issue).status(200);
        console.log("gya")
    })
})


router.put('/:issueTitle',function(req,res){
    console.log('put mei hu mai');
    const id=req.params.issueTitle;
    const newissueStatus = 'pending'
    
    issueModel.updateOne({"issueId":id},{$set:{"issueStatus":newissueStatus}})
    .exec()
    .then(answer=>{
        res.json(answer).status(200);
    })

})

// router.put('/location/:issueTitle',function(req,res){
//     const id=req.params.issueTitle;
//     const newissueLocation = req.body.issueLocation

//     issueModel.updateOne({"issueId":id},{$set:{"issueLocation":newissueLocation}})
//     .exec()
//     .then(answer=>{
//         res.json(answer).status(200);
//     })
// })




module.exports=router;