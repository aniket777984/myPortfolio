import express from "express";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());


import {userRouter} from "./routes/User.js"

app.use("/api/v1" , userRouter);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});