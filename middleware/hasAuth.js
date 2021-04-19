let createError = require("http-errors");

exports.isLoggedIn = function (req, res, next) {
  console.log('check ',req.user)
  if (req.user) {
    { 
      if (req.user.is_admin) next();
      else next();
    }
  } else {
    // console.log(req.user.is_admin);
    next(createError(404, "Page does not exist. 1"));
  }
};

exports.hasAuth = function (req, res, next) {
  if (req.user && req.user.is_admin == true) next();
  else next(createError(404, "Page does not exist. 2"));
};
