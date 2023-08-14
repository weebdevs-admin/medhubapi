const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseTestSchema = new Schema({
  question: {
    type: String
  },
  options: {
    type: String
  },
  correctAnswer: {
    type: String
  },
  explanation:{
    type: String,
  },
  coin:{
    type: Number
  },
  slug: {
    type: String,
    unique:true
  },
  section:{
    type: String,
  }


})
module.exports = mongoose.model('CourseTest', courseTestSchema)