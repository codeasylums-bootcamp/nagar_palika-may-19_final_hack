const AWS = require('aws-sdk');
const express=require('express');
const router = express.Router();

const BUCKET_NAME = 'nagarpalika';
const IAM_USER_KEY = 'AKIA3AIESVUKUTLLJAOS';
const IAM_USER_SECRET = '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';


module.exports = (app) => {
    router.post('/',function(req,res){
        console.log('yha hu');
        console.log(req);
        // const element1 = req.body.element1;
        // var busboy = new Busboy({headers : req.headers});

        // console.log(element1);

        // busboy.on('finish', function(){
        //     console.log('upload finished');

        //     console.log('files : ');
        //     console.log(req.files);

        //     const file = req.files.element2;
        //     console.log(file);
            const image = req.body.image1;
            console.log(req.files.image1);
            

            let s3bucket = new AWS.S3({
                accessKeyId: IAM_USER_KEY,
                secretAccessKey: IAM_USER_SECRET,
                Bucket: BUCKET_NAME
              });
              s3bucket.createBucket(function () {
                  var params = {
                    Bucket: BUCKET_NAME,
                    Key: image1.name,
                    Body: image1.data
                  };
                  s3bucket.upload(params, function (err, data) {
                    if (err) {
                      console.log('error in callback');
                      console.log(err);
                    }
                    console.log('success');
                    console.log(data);
                  });
              });
        })
        //req.pipe(busboy);
    }

  
