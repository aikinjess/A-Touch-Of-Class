const Appt = require('../models/appt');



module.exports = {
    index,
    new: newAppt,
    create,
    show,
    update,
    delete: deleteAppt,
    createReview
  };
  

function createReview(req, res) {
    Appt.findById(req.params.id)
    .then((appt) => {
      appt.reviews.push(req.body)
      appt.save()
      .then(()=> {
        res.redirect(`/reviews/${ appts }`)
      })
    })
  }

function index(req,res) {
    Appt.find({client:req.user._id}, function(err, appts) {
        if (err) return next(err);
        res.render("appts/index", { appts });
    })
}

function newAppt(req,res) {
    res.render("appts/new");
}

function create (req, res) {
    req.body.client= req.user._id
    const appt = new Appt(req.body);
    appt.save(function(err) {
        if (err) return res.render("appts/new");
        res.redirect("appts/");
    })
}

function show (req,res) {
    Appt.findById(req.params.id, function(err, appt) {
        Appt.find({appt: appt._id}, function(err, appts) {
            if (err) return next(err);
            res.render("appts/show", {
                appt,
                title: 'Appointments',
                user: req.user,
            });
        })
    });
}

function deleteAppt(req,res) {
    Appt.deleteOne( {_id : req.params.id}, err => {
        if (err) console.log(err)
        res.redirect("/appts")
    })
}

function update(req, res) {
    Appt.findByIdAndUpdate(req.params.id,req.body)
    .then(appt => {
        res.redirect('/appts')
    })
}
