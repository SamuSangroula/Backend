import mongoose from 'mongoose';
import express from 'express';
mongoose.connect("mongodb://localhost:27017/myDatabase")
const e = express()
 
e.listen(4000)
console.log("Hi")

e.post("/loggedin", function hi(req, res)
{
res.send("loggedin successfully")
} )
