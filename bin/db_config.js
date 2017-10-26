module.exports = app => {
    const env = process.env.NODE_ENV;

    if(env) {
        console.log("Ambiente de Teste no Ar");
        return require(`./db_config.${env}.js`);
    }
    console.log("Ambiente de Produção no Ar");
    return require(`./db_config.development.js`);
}