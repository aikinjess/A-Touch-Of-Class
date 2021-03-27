const router = require("express").Router();
const apptsCtrl = require("../controllers/appts");


router.get("/", apptsCtrl.index);
router.get("/new", apptsCtrl.new);
router.post("/", apptsCtrl.create);
router.get("/:id", apptsCtrl.show);
router.delete('/:id', apptsCtrl.delete)



module.exports = router;

