const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

app.post("/register", async(req, res) => {
  try {
    
    const mandatoryField=["firstName","emailId","age"]
    await User.create(req.body)
    res.send("User registered successfully")
  } catch (err) {
    res.send("Error" + err.message);
  }
});


app.get((req,res)=>{
  try{
    user
  }catch(err){
    res.send("Error"+err.message)

  }
})



main()
  .then(async () => {
    console.log("Connected to DB");
    app.listen(3500, () => {
      console.log("Lisstening at port 3500");
    });
    const result = await User.find({ name: "Priyam" });
    console.log(result);
  })
  .catch((err) => console.log(err));
