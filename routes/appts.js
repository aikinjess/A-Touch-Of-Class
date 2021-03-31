const router = require("express").Router();
const apptsCtrl = require("../controllers/appts");


router.get("/", isLoggedIn, apptsCtrl.index);
router.get("/new", isLoggedIn,apptsCtrl.new);
router.post("/", isLoggedIn, apptsCtrl.create);
router.get("/:id", isLoggedIn, apptsCtrl.show);
router.put('/:id', isLoggedIn, apptsCtrl.update)
router.delete('/:id', isLoggedIn, apptsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;

