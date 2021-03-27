const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema ({
    stylist: {
        type: String,
        type: ["Jessica", "Lynn", "Chloe", "Miamor"]
    },
    service: {
        type: String,
        type: ["Extensions", "Wash and Style", "Full Color", "Partial Color", "Quickweave", "Box Braids", "Lemonade Briads", "Microlinks"],
    },
    date: {
        type: Date,
    },
    newClient: Boolean
},
{
    timestamps: true
})


module.exports = mongoose.model("Appt", apptSchema);