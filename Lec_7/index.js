const express=require("express")
const app=express()



app.use(express.json())
app.get("/user",(req,res)=>{
    // res.send("Hello Good Mroning")
    res.send({"name":"Priyam"})

})

app.post("/user",(req,res)=>{
    console.log(req.body)
    res.send("Data saved successfully")
})


app.listen(4000,()=>{
    console.log("Listening at port number 4000")

})