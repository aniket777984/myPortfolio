const express = require("express");
const app =  express();
const path = require("path");
const cookieParser =require('cookie-parser') 

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());



const userRouter =  require("./routes/User.js");

app.use("/api/v1" , userRouter);


app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;