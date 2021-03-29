const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const apptSchema = new Schema({
  stylist: String,
  service: String,
  date: Date,
  newClient: Boolean,
  client: {type:Schema.Types.ObjectId, ref:"User"}
  
},{
  timestamps: true,
});

module.exports = mongoose.model("Appt", apptSchema);
