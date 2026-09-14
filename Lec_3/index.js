const fs=require('fs')


function SUM(A,B){
    console.log(A+B)
}

setTimeout(()=>{
    console.log("Hello")
},3000)

SUM(3,4)

fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res)
})

