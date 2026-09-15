const express = require("express");
const app = express();





app.use("/about/:id/:user", (req, res) => {
  // res.send("Hello Good morning")
  console.log(req.params)
  res.send({ name: "Priyam", age: 20, id: 1298, role: "SDE" });
});

//? char become optional
//+ char can be repeated multiple times
//* any number of character can arrive



// app.use("/contact", (req, res) => {
//   res.send("This is contact page");
// });

// app.use("/details", (req, res) => {
//   res.send("This is details page");
// });

// app.use("/", (req, res) => {
//   res.send("This is Home page");
// });

app.listen(4000, () => {
  console.log("Listening at port number 4000");
});
 