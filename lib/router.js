const generalController = require("./controllers/generalController");
const userController = require("./controllers/userController");
const { appLogger, LOG } = require("./logger/logger");
const { format } = require("../lib/helpers/helper");

const wrap = (path, fn) => [
  path,
  (...args) => {
    appLogger.info(LOG.APP.ROUTE, format("Routed %s", path));
    return fn(...args)
      .catch(args[2])
      .finally(() => {
        appLogger.info(LOG.APP.ROUTE, format("Finished %s", path));
      });
  },
];

exports.route = (app) => {
  app.use(...wrap("/hello", generalController.hello));
  
  app.get(...wrap("/users", userController.index));
  app.post(...wrap("/users", userController.create));
};
