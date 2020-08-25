var express = require("express");
var router = express.Router();

// Test Server Port
router.get("/", function (req, res, next) {
    res.send("Server is working properly");
});

module.exports = router;