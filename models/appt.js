const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const apptSchema = new Schema({
  stylist: String,
  service: String,
  date: Date,
  newClient: Boolean,
  client: {type:Schema.Types.ObjectId, ref:"User"},
  user: [{type: Schema.Types.ObjectId, ref:'User'}],
  reviews: [{type:Schema.Types.ObjectId, ref: "Review"}],
},
{
  timestamps: true,
});

module.exports = mongoose.model("Appt", apptSchema);
