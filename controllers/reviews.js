const Review = require('../models/review')

module.exports={
    index,
    create,
   
}
function index(req, res){
    Review.find({})
    .then((reviews,users)=>{
        res.render('reviews/reviews', {title: 'Reviews', user: req.user, users, reviews})
    })
}

function create(req, res){
    req.body.postedBy = req.user.name
    req.body.avatar =req.user.avatar
    Review.create(req.body)
    .then(()=>{
       res.redirect(`/reviews`) 
    })
    
} 