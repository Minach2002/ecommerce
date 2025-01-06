const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const authRouter=require('./routes/authRoute')
dbConnect();
//jdnjncndncndjc
app.use('/',(req,res)=>{
    res.send("Hello from server side");
});

app.use('/api/user',authRouter)
app.listen(PORT, () => {
  console.log("Server is running");
});
