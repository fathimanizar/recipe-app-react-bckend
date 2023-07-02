const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Fathimanizar:fathima@testcluster.cv1hp4e.mongodb.net/recipeappDB?retryWrites=true&w=majority")
 .then(()=>{
console.log("DB connected");
 })
 .catch(err=>console.log(err));

 let mongoSchema= mongoose.Schema;

 const RecipeSchema = new mongoSchema({
    cuisine_name:String,
    recipe_name:String,
    recipe_duration:Number,
    recipe_servings_no:Number,
    recipe_image:String
   

 })

 var recipeModel= mongoose.model("recipe",RecipeSchema);

 module.exports = recipeModel;