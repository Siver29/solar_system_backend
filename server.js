const express=require('express');
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/Store")
.then(console.log("Conected Successfuly")).catch((error)=>console.log(error))
const app=express();
app.use(express.json())
const routes=require('./routes/routes')
app.use('/',routes)
const port=7000;
app.listen({port},()=>{
    console.log(`we are in ${port} `)
})