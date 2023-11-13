const express=require("express");
const mongoose=require("mongoose");
const app=express();

// ROUTING -1
app.get('/',(req,res)=>{
      res.send('Hello NODE API');
});

// ROUTING-2
app.get('/blog',(req,res)=>{
    res.send('Hello Blog My Name Is HeroJaved');
});




//MONGODB CONNECTION
mongoose
.connect('mongodb+srv://admin:admin@cluster0.g5d2kjr.mongodb.net/Node API')
.then(()=>{
    console.log("Connected... to MongoDB")
    app.listen(3000,()=>{
        console.log("Node API server running on port 3000")
    })
})
.catch(()=>{
    console.log("ERROR")
});