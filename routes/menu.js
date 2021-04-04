const express = require("express");
const router = express.Router();

// menu's middleware
router.use(function(req, res, next) {
  console.log("menu's middleware");
  next();
});

router.get('/', function(req, res) {
  res.send('GET handler for /menu route.');
});

router.post('/', function(req, res) {
  res.send('POST handler for /menu route.');
});

module.exports = router;