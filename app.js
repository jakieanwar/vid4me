const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

//DB Connect
connectDB();

//Initializes the express app
const app = express();

//Middlewares used in Express
app.use(express.json());
app.use(cors());

//Routers
const indexRouter = require("./routes/index");

//Routes integration
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started`));
