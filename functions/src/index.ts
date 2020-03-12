import express = require("express");
import functions = require("firebase-functions");
import {Application} from "express";
import {HttpsFunction} from "firebase-functions";
import {projectsRoutesConfig} from "./projects/routes.config";
import {usersRoutesConfig} from "./users/routes.config";
import {mongodbConnector} from "./common/services/mongodb.service";

const app: Application = express();
const main: Application = express();

projectsRoutesConfig(app);
usersRoutesConfig(app);

mongodbConnector.then(() => {

    console.info(`Connected to Mongo!`);
    main.use('/api/v1', app);
}).catch(error => {

    console.error(`Unable to connect to Mongo!`, error);
});


export const webApi: HttpsFunction = functions.https.onRequest(main);
