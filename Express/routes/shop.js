const express = require("express");
const router = express.Router();
const path = require("path"); // core route path
const rootDir = require('../utils/path')


router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','views','shop.html')) // ../ is go to root file
  res.sendFile(path.join(rootDir,'views','shop.html'))
});

module.exports = router;
