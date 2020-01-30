import express = require("express");
import functions = require("firebase-functions");
import {Application} from "express";
import {HttpsFunction} from "firebase-functions";

const app: Application = express();
const main: Application = express();


main.use('/api/v1', app);

export const webApi: HttpsFunction = functions.https.onRequest(main);

app.get('/hi', (request, response) => {

    response.send('this is going to be the project manager app!');
});

// Default function usage:
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
