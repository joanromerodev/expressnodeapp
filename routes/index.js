const {
  homePage,
  loginPage,
  logoutPage,
  authProcess,
  settingsPage,
  updateUser,
} = require("../controllers/mainController");

const express = require("express");

const router = express.Router();

router.post("/logout", logoutPage);

router.post("/update", updateUser);

router.get("/", homePage);

router.get("/login", loginPage);

router.get("/settings", settingsPage);

router.post("/auth", authProcess);

module.exports = router;
