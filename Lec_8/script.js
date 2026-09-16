const express = require("express");
const app = express();

// app.use(
//   "/user",
//   (req, res,next) => {
//     console.log("First Executed")
//     // res.send("Hello");
//     next()
//   },
//   (req, res,next) => {
//     console.log("Second Executed")
//     // res.send("This is second");
//     next()
//   },
// (req,res)=>{
//     console.log("Third Executed")
//     res.send("This is third")
// }
// );

app.use("/user",(req,res)=>{
    console.log(`${Date.now()}  ${req.method}  ${req.url}`);
    next()

})

app.get("/user",(req, res) => {
  
  res.send("Info about user");
});


app.post("/user",(req, res) => {
  
  res.send("Info about user");
});


app.delete("/user",(req, res) => {
  
  res.send("Info about user");
});



app.listen(3500, (req, res) => {
  console.log("Listening at port 3500");
});
