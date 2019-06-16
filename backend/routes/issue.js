const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

//const jwt=require('jsonwebtoken');
const issueModel=require('../models/issueModel.js');


router.post('/', upload.single('issueImage'),function(req,res){
    // console.log(req.file);
    // console.log("req.bosy waala saman ");
    // console.log(req.body);
    // console.log("ye wla post se pele hua")
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
        res.json('Issue Reported Successfully, You may kill this dialog box and proceed to feed page')
        console.log(response);
        console.log("issue reported succesfully")

    }).catch(err=>{
        console.log(err);
    })

})


router.get("/",(req,res)=>{
    issueModel.find().sort({"_id":-1})
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
router.put('/vote/:issueTitle',function(req,res){
    console.log(req.body)
    const issueTitle=req.params.issueTitle;
    const newUpVotes=req.body.issueVotes;
    console.log(issueTitle);
    console.log(newUpVotes);
    issueModel.updateOne({"issueId":issueTitle},{$set:{"issueVotes":newUpVotes}})
    .exec()
    .then(answer=>{
        res.json(answer).status(200);
    })
})

router.put('/chat/:title',function(req,res){

    const issueTitle=req.params.title;
    // console.log(issueTitle)
    const newUserEmail=req.body.email;
    // console.log(req.body)
    issueModel.findOne({"issueId":issueTitle})
    .exec()
    .then(issue=>{
        // console.log("hereee")
        // console.log(issue)
        issue.issueContributers.push(newUserEmail)
        issueModel.updateOne({"issueId":issueTitle},{$set:{"issueContributers":issue.issueContributers}})
        .exec()
        .then(answer=>{
            // console.log(answer)
            res.json(answer).status(200);
        })
    
    })



   
})


router.delete('/:issueId',function(req,res){
    let issueId=req.params.issueId;

    issueModel.deleteOne({"issueId":issueId})
    .exec()
    .then(response=>{
        res.json({"message":"issue Solved"})
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
