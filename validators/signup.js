let models = require("../models");

let validator = require("validator");

const validateCreateUserFields = function (errors, req) {
  if (!validator.isEmail(req.body.email)) {
    errors["email"] = "Please use a valid email.";
  }
  if (Validator.isEmpty(req.body.email)) {
    errors["email"] = "email not be empty";
  }
  if (!validator.isAscii(req.body.password)) {
    errors["password"] =
      "Invalid characters in password, please try another one.";
  }
  if (!validator.isLength(req.body.password, { min: 8, max: 25 })) {
    errors["password"] =
      "Please ensure that your password has a minimum of 8 characters";
  }
  if (Validator.isEmpty(req.body.password)) {
    errors["password"] = "Password not be empty";
  }
  if (!validator.equals(req.body.password, req.body.password2)) {
    errors["password"] = "Invalid Password not match";
  }
};

exports.validateUser = function (errors, req) {
  return new Promise(function (resolve, reject) {
    validateCreateUserFields(errors, req);
    return models.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((u) => {
      if (u !== null) {
        errors["email"] =
          "Email is already in use. Please login or reset your password";
      }
      resolve(errors);
    });
  });
};
