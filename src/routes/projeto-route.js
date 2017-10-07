module.exports = app => {
    const x = 'projeto-controller';
    const controller = app.src.controllers.projetoController;
    const sequelize = app.bin.db;

    app.get('/projetos', controller.list);

    /*app.route('/customers')
    .get(authenticator, controller.selectAllCustomers)
    .post(authenticator, controller.saveCustomer);*/
}