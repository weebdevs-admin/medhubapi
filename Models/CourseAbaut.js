const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseAbautSchema = new Schema({
  htmlElement: {
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
module.exports = mongoose.model('CourseAbaut', courseAbautSchema)