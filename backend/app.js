var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/route.users");
var sensorsRouter = require("./routes/route.sensors");
var measuresRouter = require("./routes/route.measures");

var app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbUrl = `mongodb://localhost:27017/${dbName}`;

//Connecting to the database
mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sensors", sensorsRouter);
app.use("/measures", measuresRouter);

module.exports = app;
