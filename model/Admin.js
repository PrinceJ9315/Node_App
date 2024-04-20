const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
     title: {
         type: String,
         required: true,
         trim: true
     },
     content: {
         type: String,
         required: true,
         trim: true
     }
 })

module.exports = mongoose.model("Admin", AdminSchema);