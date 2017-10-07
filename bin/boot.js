module.exports = app => {
    //app.bin.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(console.log(`API CUP Started in PORT ${app.get('port')}`));
        });
    //})
}