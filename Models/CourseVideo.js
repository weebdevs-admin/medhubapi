const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseVideoSchema = new Schema({
  video: {
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
module.exports = mongoose.model('CourseVideo', courseVideoSchema)