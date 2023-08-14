const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  img: {
    type: String,
  }
})
module.exports = mongoose.model('Team', teamSchema)