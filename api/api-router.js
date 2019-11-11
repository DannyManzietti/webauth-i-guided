const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const credentials = req.body;

const hash = bcrypt.hashSync(credentials.password, 14);

credentials.password = hash;
router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});
router.get("/hash", (req, res) => {
  //read a password from body
  //hash password
  //return to use in object that looks like {password:'original password', hash: 'hash password'}
  if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
    return res.status(401).json({ error: 'Incorrect credentials' 
});

module.exports = router;
