import express from 'express';
import { config } from './config/index';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './routers/index';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({ origin: ['http://localhost:9000','http://0.0.0.0:9000']}));

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`listening http://localhost:${config.port}`);
});

module.exports = app;
