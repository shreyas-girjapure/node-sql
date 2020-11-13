const User = require("../Models/User");

async function createUser(user) {
  await User.create(user);
}

async function deleteUser(id) {
  let deleteState = await User.destroy({
    where: {
      id: id,
    },
  });
  if(!deleteState){
      throw new Error('id does not exist in db');
  }
}
async function getAllUsers() {
  let data = await User.findAll({
    raw: true,
  });  
  return data;
}

async function getUserByName(name) {
  await User.findOne({
    where: {},
  });
}

module.exports = { createUser, deleteUser, getAllUsers };
