const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});
router.get("/hash", (req, res) => {
  //read a password from body
  const { password } = req.body;
  //hash password
  const hash = bcrypt.hashSync(credentials.password, 14);
  //return to use in object that looks like {password:'original password', hash: 'hash password'}
  res.status(201).json({ password, hash });
});

module.exports = router;
