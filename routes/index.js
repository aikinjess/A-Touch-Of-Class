const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("index", { title: "A Touch of Class", user: req.user ? req.user : null });
});

module.exports = router;
