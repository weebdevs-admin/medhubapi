const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mainCategorySchema = new Schema({
  title: {
    type: String
  },
  img: {
    type: String,
  }
})
module.exports = mongoose.model('MainCategory', mainCategorySchema)