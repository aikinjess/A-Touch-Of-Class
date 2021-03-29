const Comment = require('../models/comment')


module.exports = {

    new: newComment,
    create,
    show,
    deleteComment,

}



function newComment(req, res){
        res.render('comments/new', {title: 'Add Comment',})
}  

function create(req, res) {
  const comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) return res.render("comments/new");
    res.redirect("comments/show");
  });
}

function show(req, res){
    Comment.findById(req.params.id, function(err, comment){
        res.render('comments/show', {title: 'Comment Detail', comment})
    })
}
function deleteComment(req, res){
    Comment.findByIdAndDelete(req.params.id, function(err, comments){
        res.redirect('/comments/show')
    })
}