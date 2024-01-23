const express = require("express");
const router = express.Router();
const path = require("path"); // core route path
const rootDir = require("../utils/path");

// router is mini express it contain only router details

router.use("/add", (req, res, next) => {
  res.sendFile(
    path.join(rootDir,'views','add-product.html')
  );
});
router.post("/store", (req, res, next) => {
  //only works for post request
  console.log("form data", req.body); //install body parser to see the request body
  res.send("<b>product submitted</b>");
  
});

module.exports = router;
