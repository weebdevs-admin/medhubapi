const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseListSchema = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String,
    unique:true
  },
  content: {
    type: String,
  },
  type:{
    type: String,
  }


})
module.exports = mongoose.model('CourseList', courseListSchema)