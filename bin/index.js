import express from 'express';
import consign from 'consign';

const app = express();

consign()
    .include('bin/db_config.js')
    .then('bin/db.js')
    .then('src/models')
    .then('bin/middlewares.js')
    .then('src/controllers')
    .then('src/routes')
    .then('bin/boot.js')
    .into(app);