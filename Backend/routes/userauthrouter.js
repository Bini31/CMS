const express = require('express')
const router = express.Router();
const registerData = require('../model/registermodel')
const addPostData=require('../model/addPostmodel')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const checkAuth=require('../middleware/check-auth')
router.post('/register',(req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.json({ success: false, message: "Hashing issue" })
      }
      else {
        const user = new registerData({
          name: req.body.name,
          email: req.body.email1,
        userrole:null,
          password:hash,
          
  
        })
        user.save()
          .then((result) => {
  
            res.json({ success: true, message: "User Created" })
          }).catch(err => {
            if (err.code === 11000) {
  
              return res.json({ success: false, message: "Email id alredy exists" })
  
  
            }
            return res.json({ success: false, message: "Authentication Failed" })
  
          })
      }
    })
  
  
  });
  router.post('/addpost',(req, res) => {
    const posts = new addPostData({
      title: req.body.title,
      slug: req.body.slug,
    body:req.body.body,
      date:req.body.date,
      

    })
    posts.save()
    .then((result) => {
  
      res.json({ success: true, message: "Posts Saved" })
    }).catch(err => {
      
      return res.json({ success: false, message: "Not Saved" })

    })
  });
  router.post('/login',(req, res) => {
    //res.json("Hai");
    registerData.find({ email: req.body.email1 })
      .exec()
      .then((result) => {
        if (result.length < 1) {
          return res.json({ success: false, message: "user not found" })
        }
        const user = result[0];
        bcrypt.compare(req.body.password,user.password,(err, ret) => {
          if (ret) {
            let userrole=user.userrole;
            let username=user.name;
            let useremail=user.email
            const payload={
              userid:user._id
            }
            const token=jwt.sign(payload,'ICTAcademy');
            return res.json({ success: true, message: "Login successful",userrole:userrole,token:token,username:username,useremail:useremail})
            
          }
          else {
            return res.json({ success: false, message: "Password not matched" })
          }
        })
      }).catch(err => {
        res.json({ success: false, message: "Auth Failed" })
      });
  })
  module.exports = router;