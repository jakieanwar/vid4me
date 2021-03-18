const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("passport");

require("./config/passport-setup");

//DB Connect
connectDB();

//Initializes the express app
const app = express();

//Middlewares used in Express
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//Routers
const indexRouter = require("./routes/index");

//Routes integration
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started`));
