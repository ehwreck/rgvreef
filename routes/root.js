const express = require("express");
const router = express.Router();
const path = require("path");

// Routes recognize regexp
// ^ - beginning of the string only
// $ - at the end of the string only
// ^/$ - means that this will only match if the requested route is only a slash
// | - means or
// ()? - means optional
router.get("^/$|/index(html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
