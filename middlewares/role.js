exports.isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(401).send({ msg: "Not authorized" });
  }
};

exports.isSeller = (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "seller") {
    next();
  } else {
    return res.status(401).send({ msg: "Not authorized" });
  }
};
