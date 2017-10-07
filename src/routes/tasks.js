module.exports = app => {
    const Tasks = app.src.models.tasks;
    app.get("/tasks", (req, res, next) => {
        Tasks.findAll({ }, data => {
            res.json({
                tasks: data
            });
        });
    });
};