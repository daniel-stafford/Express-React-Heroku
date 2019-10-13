const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  }
})

module.exports = mongoose.model("Expense", schema)
