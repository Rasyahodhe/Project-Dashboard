const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server Active");
});
router.get("/laode", (req, res) => {
  res.send("laode");
});

module.exports = router;
