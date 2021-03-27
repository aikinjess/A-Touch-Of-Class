const Appt = require('../models/appt')

module.exports = {
    index,
    createReview,
    
  
};

function index(req,res) {
    Appt.find({}, function(err, appts) {
        if (err) return next(err);
        res.render("appts/index", { appts });
    })
}


function createReview(req, res) {
    Appt.findById(req.params.id)
    .then((appt) => {
      appt.reviews.push(req.body)
      appt.save()
      .then(()=> {
        res.redirect(`/appts/${appt.slug}`)
      })
    })
  }


