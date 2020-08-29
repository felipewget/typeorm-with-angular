import "reflect-metadata";
import { createConnection } from 'typeorm';
let cors = require('cors')
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();

createConnection()

app.use(cors( { origin: 'http://localhost:4200', optionsSuccessStatus: 200 } ));
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);