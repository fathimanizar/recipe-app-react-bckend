const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Fathimanizar:fathima@testcluster.cv1hp4e.mongodb.net/recipeappDB?retryWrites=true&w=majority")
 .then(()=>{
console.log("DB connected");
 })
 .catch(err=>console.log(err));

 let mongoSchema= mongoose.Schema;

 const CuisineSchema = new mongoSchema({
    cuisine_name:String,
    cuisine_duration:Number,
    cuisine_servings_no:Number,
    cuisine_image:String
   

 })

 var cuisineModel= mongoose.model("cuisine",CuisineSchema);

 module.exports = cuisineModel;