const UserModel = require("../model/UserModel");
const UserService = {
    addUser: (username, password, age) => {
        return UserModel.create({
            username,
            password,
            age,
        });
    },

    updateUser: (_id, username, password, age) => {
        return UserModel.updateOne({_id}, {username, password, age});
    },

    deleteUser: (_id) => {
        return UserModel.deleteOne({_id});
    },

    listUser: (page, limit) => {
        return UserModel.find({}, ["username", "age"])
            .sort({age: 1})
            .skip((page - 1) * limit)
            .limit(limit);
    },
};

module.exports = UserService;
