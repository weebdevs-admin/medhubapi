const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseThemaSchema = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String,
    unique:true
  },
  section:{
    type: String,
  }


})
module.exports = mongoose.model('CourseThema', courseThemaSchema)