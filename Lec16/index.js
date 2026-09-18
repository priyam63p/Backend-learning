const mongoose = require("mongoose");
// const { Schema } = mongoose;

async function main(params) {
  await mongoose.connect(`mongodb+srv://patrapriyom_db_user:m4SR4aNR230G2FLL@firstproject.5dhthed.mongodb.net/FirstDB`);

//   const userSchema = new Schema({
//     name: String,
//     age: Number,
//     city: String,
//     gender: String,
//   });

  //MODEL CREATE:Create Collection
//   const User = mongoose.model("user", userSchema);

//   const user1 = new User({
//     name: "Priyam",
//     age: 20,
//     city: "Kolkata",
//     gender: "Male",
//   });
//   await user1.save();

//     await User.create({name:"Priyam",city:"Kolkata",age:20})



//   await User.insertMany([
//     { name: "Dog", age: 18 },
//     { age: 20, gender: "Male" },
//   ]);

//   const ans=await User.find({})
//   console.log(ans)


//   const result=await User.find({name:"Priyam"})
//   console.log(result)
}




module.exports=main
