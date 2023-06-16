const express = require("express");
const router = require("./routes/index.js");
const dotenv = require("dotenv/config");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 4000;

app.set("port", port);

app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.siteName = "Platform";
  return next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    cookie: { maxAge: 3600000 }, // 1 hour
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "pug");

app.use("/", router);

//Handling 404 error
app.use((req, res, next) => {
  res.status(404).render("404", { title: "Not Found" });
});

//Other errors handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", { title: "Error", error: err.message });
});

app.listen(port, () => {
  console.log("App listening in port " + port);
});
