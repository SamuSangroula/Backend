import mongoose from 'mongoose';
import express from 'express';
import bcrypt from "bcrypt";
mongoose.connect("mongodb://localhost:27017/myDatabase")
const e = express()
 
e.listen(4000)
console.log("Hi")

e.post("/login", function hi(req, res) {
  res.send("loggedin successfully");
});

e.use(express.json());

const userSchema = new mongoose.Schema({
email: String,
password: String,
});

const User = mongoose.model("User", userSchema);

// Register
e.post("/register", async (req, res) => {
const { email, password } = req.body;

const hashedPassword = await bcrypt.hash(password, 10);

const user = new User({
email,
password: hashedPassword,
});

await user.save();

res.send("Registered Successfully");
});

// Login
e.post("/login", async (req, res) => {
const { email, password } = req.body;

const user = await User.findOne({ email });

if (!user) {
return res.send("User not found");
}

const match = await bcrypt.compare(password, user.password);

if (!match) {
return res.send("Wrong password");
}

res.send("Login Successful");
});

// Forgot Password
e.post("/forgot-password", (req, res) => {
res.send("Reset password link sent");
});