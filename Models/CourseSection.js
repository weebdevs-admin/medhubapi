const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSectionSchema = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String,
    unique:true
  },
  dep: {
    type: String,
  },
  lock:{
    type: Boolean,
  }


})
module.exports = mongoose.model('CourseSection', courseSectionSchema)