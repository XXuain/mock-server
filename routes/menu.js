const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /menu route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /menu route.');
});

module.exports = router;