const express = require("express");
const app = express();

const BookStore = [
  { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, name: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, name: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, name: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 7, name: "Fahrenheit 451", author: "Ray Bradbury" },
  { id: 8, name: "Moby-Dick", author: "Herman Melville" },
  { id: 9, name: "Brave New World", author: "Aldous Huxley" },
  { id: 10, name: "The Alchemist", author: "Paulo Coelho" },
];

app.use(express.json())

app.get("/book", (req, res) => {
  res.send(BookStore);
});

app.get("/book/:id", (req, res) => {
  console.log(req.params)
  const id=parseInt(req.params.id)
  const Book=BookStore.find(info=>info.id===id)
  res.send(Book)
//   res.send("Done")


});


app.post("/book/",(req,res)=>{
    BookStore.push(req.body)
    res.send("Data Saved Successfully")


})

app.listen(4000,()=>{
    console.log("Listening at port number 4000")

})