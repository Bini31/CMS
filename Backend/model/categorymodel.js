const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ArtGallery');
//mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://bini:user1@cms.vp6iq.mongodb.net/CMSTCS?retryWrites=true&w=majority');



var CategorySchema = new Schema({
    //id:{type:String,required:true},
  // profileId : {type:String,required:true},
    categoryname: {type:String,required:true}
    
    
 
  
});

var categoryData= mongoose.model('category',CategorySchema);                        //UserData is the model and NewBookData is the schema

module.exports = categoryData;