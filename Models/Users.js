const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String,
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('Users', userSchema)