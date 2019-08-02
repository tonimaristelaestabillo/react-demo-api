module.exports = function (app) {
    var controller = require('../controllers/EmployeeController');

    app.route('/employees')
        .get(controller.list)
        .post(controller.create);



    app.route('/employee/:id')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

};