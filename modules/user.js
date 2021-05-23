const User = require('./../database/db.js');

const create = async (params) => {
  let user = new User(params);
  console.log(params);
  console.log(user);
  try {
    await user.save().then((res) => console.log(res));
    return { message: "Success" };
  } catch (err) {
    return { error: err, message: "Failed to create user" };
  }
}

const fetch = async (params) => {
  try {
    let user = await User.findOne({ name: params.query.name });
    if (user === null) throw "User Not Found";
    else return { user: user, message: "Success" };
  } catch (err) {
    return { error: err, message: "User Not Found" };
  }
}

const update = async (params) => {
  try {
    let user = await User.findOne({ name: params.name });
    if (user === null) throw "User Not Found";
    await User.findOneAndUpdate({ name: params.name }, params);
    return { message: "Success" };
  } catch (err) {
    return { error: err, message: "User Not Found" };
  }
}

const updateNotes = async (params) => {
  try {
    let user = await User.findOne({ name: params.name });
    if (user === null) throw "User Not Found";

    console.log("User object: " + user);
    var cal = user.calendar;
    cal.push({ date: params.date, notes: params.notes });
    let newParams = {
      userID: user.userID,
      name: user.name,
      checkIns: user.checkIns,
      calendar: cal
    }
    console.log("New params: " + newParams);

    await User.findOneAndUpdate({ name: params.name }, newParams);
    return { message: "Success" };
  } catch (err) {
    return { error: err, message: "User Not Found" };
  }
}

module.exports = { create, fetch, update, updateNotes };
