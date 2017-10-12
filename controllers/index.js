var express = require("express");
var router = express.Router();

router.use("/resource", require("./resource"));

module.exports = router;