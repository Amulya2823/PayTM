const express = require("express");
const mainRouter = require("./routes")
const userRouter = require("./routes/user")
const jwtSecret = require("./config")
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/api/v1" , mainRouter);
app.use("/api/v1/user" ,userRouter)


app.listen(3000);