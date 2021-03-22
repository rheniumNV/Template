const { appLogger, LOG } = require("../logger/logger");
const db = require("../../models/index");

exports.index = async (_req, res) => {
  const users = await db.user.findAll();
  appLogger.debug(LOG.WEB.GENERAL.USERS, users);
  res.send(users);
};

exports.create = async (req, res) => {
  const {name, age} = req.body;
  await db.user.create({
    name,age
  });
  res.send('ok');
};