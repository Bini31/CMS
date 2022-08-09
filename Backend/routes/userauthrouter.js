const express = require('express')
const router = express.Router();
const registerData = require('../model/registermodel')
const addPostData=require('../model/addPostmodel')
const categoryData=require('../model/categorymodel')
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
  router.get('/profile',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    addPostData.find()
        .then((profiles) => {
           // console.log(users)
          let email=profiles.email
            res.send(profiles)
        });
  });
  router.get('/users',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    registerData.find()
        .then((profiles) => {
           // console.log(users)
            res.send(profiles)
        });
  });
  router.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    addPostData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  router.delete('/categoryremove/:id',(req,res)=>{
   
    id = req.params.id;
    categoryData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  router.delete('/removeuser/:id',(req,res)=>{
   
    id = req.params.id;
    registerData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  router.post('/addpost',(req, res) => {
    const posts = new addPostData({
      title: req.body.title,
      slug: req.body.slug,
    body:req.body.body,
      date:req.body.date,
      category:req.body.category,
email:req.body.email
    })
    posts.save()
    .then((result) => {
  
      res.json({ success: true, message: "Posts Saved" })
    }).catch(err => {
      
      return res.json({ success: false, message: "Not Saved" })

    })
  });
  router.post('/category',(req, res) => {
    const category= new categoryData({
      category: req.body.category,
     
      

    })
    category.save()
    .then((result) => {
  
      res.json({ success: true, message: "Category Saved" })
    }).catch(err => {
      
      return res.json({ success: false, message: "Not Saved" })

    })
  });
  
  router.get('/category', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    categoryData.find()
        .then((category) => {
           
            res.send(category)
        });
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
  router.get('/myposts/:email', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
     email= req.params.email;
     //console.log(id)
    addPostData.find({"email":email})
    .then((profileItem)=>{
        res.send(profileItem);
    });
  })
  router.get('/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
     id = req.params.id;
     console.log(id)
    addPostData.findOne({"_id":id})
    .then((profileItem)=>{
        res.send(profileItem);
    });
  })
  router.get('/users/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
     id = req.params.id;
     console.log(id)
    registerData.findOne({"_id":id})
    .then((profileItem)=>{
        res.send(profileItem);
    });
  })
  router.get('/readpost/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
     id = req.params.id;
     console.log(id)
    addPostData.findOne({"_id":id})
    .then((profileItem)=>{
        res.send(profileItem);
    });
  })
  router.get('/categories/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
     id = req.params.id;
     console.log(id)
    categoryData.findOne({"_id":id})
    .then((profileItem)=>{
        res.send(profileItem);
    });
  })
  router.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    //profileId= req.body.profileId,
    title = req.body.title,
    slug= req.body.slug,
    body = req.body.body,
   date= req.body.date,
   category=req.body.category
   //category=req.body.categoryname

   addPostData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                  //"profileId":productId,
                                  "title":title,
                                  "slug":slug,
                                  "body":body,
                                 "date":date,
                                "category":category
                                //"category":categoryname
                              }})
   .then(function(){
       res.send();
   })
  })
  router.put('/categoryupdate',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    
  
   category=req.body.category


   categoryData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                
                                 
                                "category":category
                                
                              }})
   .then(function(){
       res.send();
   })
  })
 
  router.put('/updateuser',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    //profileId= req.body.profileId,
    name= req.body.name,
    email= req.body.email,
  userrole = req.body.userrole,
  
   //category=req.body.categoryname

   registerData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                  //"profileId":productId,
                                  "name":name,
                                  "email":email,
                                 "userrole":userrole,
                                
                                //"category":categoryname
                              }})
   .then(function(){
       res.send();
   })
  })
  
  module.exports = router;