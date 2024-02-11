require('dotenv').config();
require('path');

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("oiii");
});


module.exports = router;