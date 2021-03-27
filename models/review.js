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

module.exports = mongoose.model("Review", reviewSchema);