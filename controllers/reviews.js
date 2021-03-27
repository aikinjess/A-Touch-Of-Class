const Appt = require('../models/appt');
const Review = require('../models/review');

module.exports = {
    new: newReview,
    createReview,
    index,
    show
    
}; 


function show(req, res){
    // Find the movie by id
    Review.findById(req.params.id, function(err, review) {
      // Pass the movie to a callback function
      // and render a show view
      res.render('reviews/show', {
        title: 'Reviews',
        review
      })
    })
  }

  function index(req, res) {
    // Find all the movies
    Review.find({}, function(err, reviews){
      // Render index view
      res.render("reviews/index", {
        reviews: reviews,
        title: 'All Reviews'
      })
    })
  }

function newReview(req,res) {
    res.render("reviews/new", 
        { id: req.params.id });
}


function createReview(req, res) {
    Review.findById(req.params.id)
    .then((review) => {
      review.reviews.push(req.body)
      review.save()
      .then(()=> {
        res.redirect(`/reviews/${review.slug}`)
      })
    })
  }


