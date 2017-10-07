import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let sequelize = null

module.exports = app => {
    if(!sequelize) {
        const config = app.bin.db_config;
        const sequelize = new Sequelize(config.database, config.user, config.password, {
            host: config.host,
            port: config.port,
            dialect: 'mysql',
            pool: {
                min: 0,
                max: 5,
                idle: 1000
            }
        });
        
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        return sequelize;
    } else {
        return sequelize;
    }
}