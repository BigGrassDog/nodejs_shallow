// 连接数据库
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/grassdog_project")
// 插入集合和数据，数据库 grassdog_project 会自动创建