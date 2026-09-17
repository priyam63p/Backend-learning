const express = require("express");
const app = express();
const { Auth } = require("./middleware/auth");

app.use(express.json());

const Menu = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Paneer Tikka", category: "veg", price: 350 },
  { id: 3, food: "Chicken Biryani", category: "non-veg", price: 450 },
  { id: 4, food: "Spring Roll", category: "veg", price: 200 },
  { id: 5, food: "Butter Chicken", category: "non-veg", price: 550 },
  { id: 6, food: "Veg Burger", category: "veg", price: 150 },
  { id: 7, food: "Grilled Fish", category: "non-veg", price: 600 },
  { id: 8, food: "Hakka Noodles", category: "veg", price: 250 },
  { id: 9, food: "Chicken Momos", category: "non-veg", price: 180 },
  { id: 10, food: "Pasta Alfredo", category: "veg", price: 400 },
  { id: 11, food: "Veg Biryani", category: "veg", price: 300 },
  { id: 12, food: "Fish Tikka", category: "non-veg", price: 520 },
  { id: 13, food: "Garlic Bread", category: "veg", price: 180 },
  { id: 14, food: "Chicken Wings", category: "non-veg", price: 380 },
  { id: 15, food: "Margherita Pizza", category: "veg", price: 450 },
];

const AddToCart = [];

app.get("/food", (req, res) => {
  res.status(200).send(Menu);
});

app.post("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foodItems = Menu.find((item) => item.id === id);
  if (foodItems) {
    AddToCart.push(foodItems);
    res.status(200).send("Item added successfully");
  } else {
    res.send("Item out of stock");
  }
});

app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = AddToCart.findIndex((item) => item.id === id);
  if (index != 1) {
    AddToCart.splice(index, 1);
    res.send("Item removed successfully");
  } else {
    res.send("Item is not present in cart");
  }
});

app.get("/user", (req, res) => {
  if (AddToCart.length == 0) res.send("Cart is empty");
  else res.send(AddToCart);
});

app.get("/dummy", (req, res) => {
  try {
    // JSON.parse("Invalid JSON");
    throw new Error("Broken");
    res.send("Good morning");
  } catch (err) {
    res.send("Some error occured " + err);
  }
});

app.use("/admin", Auth);

app.post("/admin", (req, res) => {
  try {
    Menu.push(req.body);
    res.status(201).send("Item Added Successfully");
  } catch (err) {
    res.status(202).send("Items can't be added");
  }
});

app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = Menu.findIndex((item) => item.id === id);
  if (index === -1) {
    res.send("Item doesn't exist ");
  } else {
    Menu.splice(index, 1);
    res.send("Successfully Deleted");
  }
});

app.patch("/admin", (req, res) => {
  const id = req.body.id;
  const foodData = Menu.find((item) => item.id === id);

  if (foodData) {
    if (req.body.food) {
      foodData.food = req.body.food;
    }
    if (req.body.category) {
      foodData.category = req.body.category;
    }
    if (req.body.price) {
      foodData.price = req.body.price;
    }
    res.send("Successfully Updated");
  } else {
    res.send("Item not exist");
  }
});

app.listen(3600, (req, res) => {
  console.log("Listening at port 3600");
});
