const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserType = {
  username: String,
  password: String,
  age:Number
}
 
const UserModel = mongoose.model("user",new Schema(UserType))
// 模型 user 将会对应 users 集合
module.exports = UserModel