const router = require("express").Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/", reviewsCtrl.index);
router.post("/", reviewsCtrl.createReview);

module.exports = router;


