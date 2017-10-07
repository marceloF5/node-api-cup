module.exports = app => {

    const Projeto = app.src.models.projeto;
    const sequelize = app.bin.db;
    var controller = {};

    controller.list = (req, res) => {
        const sql = "SELECT idt_projeto, id_gestao, nome_projeto FROM projetos";
        
        sequelize.query(sql).spread((results, metadata) => {
            res.status(200).json(metadata);
        });
    }

    return controller;
}