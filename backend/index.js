const express = require("express");
const mainRouter = require("./routes")
const userRouter = require("./routes/user")
const app = express();

app.use("/api/v1" , mainRouter);
app.use("/api/v1/user" ,userRouter)