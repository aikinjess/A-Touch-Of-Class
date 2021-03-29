const express = require('express')
const router = express.Router();
const commentsCtrl = require('../controllers/comments')


router.get('/new', commentsCtrl.new);
router.post('/', commentsCtrl.create);
router.get('/:id/show', commentsCtrl.show)
router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router 
