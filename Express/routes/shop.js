const express = require("express");
const router = express.Router();
const path = require("path"); // core route path

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','shop.html')) // ../ is go to root file
});

module.exports = router;
