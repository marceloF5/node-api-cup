import https from 'https';
import fs from 'fs';

module.exports = app => {
    //app.bin.db.sequelize.sync().done(() => {
    console.log(process.env.NODE_ENV);
    /*if (process.env.NODE_ENV != "test") {
        const credentials = {
            key: fs.readFileSync('89144290-apicup.key', 'utf8'),
            cert: fs.readFileSync('89144290-apicup.cert', 'utf8')
        }
        https.createServer.
    }*/

    const crendencials = {
        key: fs.readFileSync('89144290-apicup.key', 'utf8'),
        cert: fs.readFileSync('89144290-apicup.cert', 'utf8')
    }
    https.createServer(crendencials, app)
         .listen(app.get('port'), () => {
            console.log(console.log(`API CUP Started in PORT ${app.get('port')}`));
         });
    //})
}