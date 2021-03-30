const router =require('express').Router();
const reviewCtrl= require('../controllers/reviews');

router.get('/', isLoggedIn, reviewCtrl.index)
router.post('/', isLoggedIn, reviewCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports= router;