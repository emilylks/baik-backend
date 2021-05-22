const User = require('./../database/db.js');

const create = (params) => {
  let user = new User(params);
  user.save()
      .then(() => {
        return { message: "Success" };
      })
      .catch(() => {
        return { message: "Failed to create user" };
      });
}

const fetch = (params) => {
  User.findOne({ name: params.query.name })
  .then((user) => {
    if (user === null) throw "User Not Found";
    else return { user: user, message: "Success" };
  })
  .catch(() => {
    return { message: "User Not Found" };
  });
}

const update = (params) => {
  User.findOne({ name: params.name })
  .then((user) => {
    if (user === null) throw "User Not Found";
  })
  .then(() => User.findOneAndUpdate({ name: params.name }, params))
  .then(() => {
    return { message: "Success" };
  })
  .catch(() => {
    return { message: "User Not Found" };
  })
}

module.exports = { create, fetch, update };
