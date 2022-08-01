const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ArtGallery');
//mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://bini:user1@cms.vp6iq.mongodb.net/CMSTCS?retryWrites=true&w=majority');



var AddPostSchema = new Schema({
   // _id:{type:String,required:true},
  // profileId : {type:String,required:true},
    title: {type:String,required:true},
    slug:{type:String,unique:true},
    body:{type:String,required:true},
    date:{type:Date,required:true},
    
 
  
});

var addPostData= mongoose.model('postdatas',AddPostSchema);                        //UserData is the model and NewBookData is the schema

module.exports = addPostData;