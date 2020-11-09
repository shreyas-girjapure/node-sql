const User = require('../Models/User')

async function createUser(user) {
    console.log("create user values");
    console.log(user);
    await User.create(user)
}

module.exports = createUser;