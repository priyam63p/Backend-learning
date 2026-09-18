const express = require("express");
const app = express();
const main = require("./index");
const User = require("./Models/users");

app.use(express.json());

app.get("/info", async (req, res) => {
  const ans = await User.find({});
  res.send(ans);
});

app.post("/info", async (req, res) => {
  // const ans=new User(req.body)
  // await ans.save()
  try {
    await User.create(req.body);
    res.send("Successfully Updated");
  } catch (err) {
    res.status(500).send(err);
  }

  res.send("Successfully Updated");
});

app.delete("/info", async (req, res) => {
  await User.deleteOne({ name: "Dog" });
  res.send("Deleted");
});

app.put("/info", async (req, res) => {
  const result = await User.updateOne(
    { name: "Priyam" },
    { age:120,city: "Bengaluru" }
  );
  res.send("Updated");
});

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
