const authenticateUser = require("../utils/authSetting");
const dotenv = require("dotenv/config");
const getUserData = require("../models/Users.js");
const updateUserDB = require("../utils/updateUser.js");
let signingError;
let settingsMsg;

const homePage = (req, res) => {
  if (req.session.isAuthenticated) {
    settingsMsg = false;
    const User = getUserData();
    req.session.previousView = "/";
    res.render("dashboard", {
      title: "Dashboard",
      isAuthenticated: req.session.isAuthenticated,
      user: User,
    });
  } else {
    signingError = false;
    res.redirect("/login");
  }
};

const settingsPage = (req, res) => {
  if (req.session.isAuthenticated) {
    const User = getUserData();
    req.session.previousView = "/settings";
    res.render("settings", {
      title: "Settings",
      settingsMsg,
      isAuthenticated: req.session.isAuthenticated,
      user: User,
    });
  } else {
    signingError = false;
    res.redirect("/login");
  }
};

const updateUser = (req, res) => {
  const { name, email, phone } = req.body;
  const nameCheck = name.trim() === "" ? false : true;
  const emailCheck = email.trim() === "" ? false : true;
  const phoneCheck = phone.trim() === "" ? false : true;
  if (nameCheck || emailCheck || phoneCheck) {
    try {
      updateUserDB(req.body);
      settingsMsg = {
        type: "success",
        text: "Information successfully updated",
      };
      res.redirect("/settings");
    } catch (error) {
      settingsMsg = {
        type: "danger",
        text: "There was an error updating the data. Please contact admin",
      };
      res.redirect("/settings");
    }
  } else {
    settingsMsg = { type: "danger", text: "At least 1 field must be updated" };
    res.redirect("/settings");
  }
};

const authProcess = (req, res) => {
  const { username, password } = req.body;
  const usn = username.trim() === "" ? false : true;
  const pass = password.trim() === "" ? false : true;
  if (usn && pass) {
    if (authenticateUser(username, password)) {
      const User = getUserData();
      signingError = false;
      req.session.isAuthenticated = true;
      req.session.user = User;
      res.redirect("/");
    } else {
      signingError = "Incorrect credentials, please try again";
      res.redirect("/login");
    }
  } else {
    signingError = "All fields are mandatory";
    res.redirect("/login");
  }
};

const loginPage = (req, res) => {
  if (!req.session.isAuthenticated) {
    req.session.previousView = "/login";
    res.render("login", {
      title: "Login",
      isAuthenticated: req.session.isAuthenticated,
      signingError,
    });
  } else {
    res.redirect("/");
  }
};

const logoutPage = (req, res) => {
  req.session.isAuthenticated = false;
  res.redirect("/login");
};

module.exports = {
  homePage,
  loginPage,
  logoutPage,
  authProcess,
  settingsPage,
  updateUser,
};
