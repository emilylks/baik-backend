const User = require('./../database/db.js');

const create = async (params) => {
  let user = new User(params);
  try {
    await user.save();
    return { message: "Success" };
  } catch {
    return { message: "Failed to create user" };
  }
}

const fetch = async (params) => {
  try {
    let user = await User.findOne({ name: params.query.name });
    if (user === null) throw "User Not Found";
    else return { user: user, message: "Success" };
  } catch {
    return { message: "User Not Found" };
  }
}

const update = async (params) => {
  try {
    let user = await User.findOne({ name: params.name });
    if (user === null) throw "User Not Found";

    await User.findOneAndUpdate({ name: params.name }, params));
    return { message: "Success" };
  } catch {
    return { message: "User Not Found" };
  }
}

module.exports = { create, fetch, update };
