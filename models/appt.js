const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewer: String,
  avatar: String,
  rating: { type: Number, min: 1, max: 10 },
  content: String,
},{
  timestamps: true,
});

const apptSchema = new Schema({
  stylist: String,
  service: String,
  date: Date,
  newClient: Boolean,
  reviews: [reviewSchema],
},{
  timestamps: true,
});

module.exports = mongoose.model("Appt", apptSchema);
