import cors from 'cors';

module.exports = app => {
    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
}