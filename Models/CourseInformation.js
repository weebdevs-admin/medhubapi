const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseInformationSchema = new Schema({
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
module.exports = mongoose.model('CourseInformation', courseInformationSchema)