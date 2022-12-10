const express = require('express');
const UsersControllers = require("../controllers/UsersControllers");

exports.router = (function() {

    let apiUsersRouter = express.Router();

    apiUsersRouter.route('/users').get(UsersControllers.getAll);
    apiUsersRouter.route('/users/:id').get(UsersControllers.get);
    apiUsersRouter.route('/createusers').post(UsersControllers.save);
    apiUsersRouter.route('/updateusers/:id').put(UsersControllers.update);
    apiUsersRouter.route('/deleteusers/:id').delete(UsersControllers.delete);

    return apiUsersRouter;

})();