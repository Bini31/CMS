const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ArtGallery');
//mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://bini:user1@cms.vp6iq.mongodb.net/CMSTCS?retryWrites=true&w=majority');



var RegisterSchema = new Schema({
   // _id:{type:String,required:true},
  // profileId : {type:String,required:true},
    name : {type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    userrole:{type:String},
  
 
  
});

var registerData= mongoose.model('users', RegisterSchema);                        //UserData is the model and NewBookData is the schema

module.exports = registerData;