const router = require("express").Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/", reviewsCtrl.index)
router.get('/new', reviewsCtrl.new)
router.post("/", reviewsCtrl.createReview);
router.get("/:id", reviewsCtrl.show);


module.exports = router;


