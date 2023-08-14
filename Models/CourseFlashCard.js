const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseFlashCardSchema = new Schema({
  title: {
    type: String
  },
  desc: {
    type: String,
  },
  slug: {
    type: String,
    unique:true
  },
  section:{
    type: String,
  }


})
module.exports = mongoose.model('CourseFlashCard', courseFlashCardSchema)