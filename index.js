import express from 'express';
const e = express()
 
e.listen(4000)
console.log("Hi")

e.post("/loggedin", function hi(req, res)
{
res.send("loggedin successfully")
} )
