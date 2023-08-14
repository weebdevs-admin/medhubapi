const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  comment: {
    type: String,
  },
  img: {
    type: String,
  }
})

module.exports = mongoose.model('Comment', commentSchema)