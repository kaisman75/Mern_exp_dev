
const express= require("express");
const app=express()
require('dotenv').config();

app.use('/',(req,res)=>{
    res.send("hello kais")
})

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is ready to connect in port ${PORT}`)
});

