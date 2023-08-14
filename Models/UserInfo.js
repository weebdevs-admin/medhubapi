const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserInfoSchema = new Schema({
  id:{
    type:String,
    unique:true
  },
  firstname: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  courses:[
    {
      type:Object,
      name:{
        type:String
      },
      plan:{
        type:String
      },
      date:{
        type:String
      }
    }
  ],
  coin: {
    type: Number
  }
  
})

module.exports = mongoose.model('UserInfo', UserInfoSchema)