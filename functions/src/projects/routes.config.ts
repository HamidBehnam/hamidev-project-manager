import {Application} from "express";

export const projectsRoutesConfig = (app: Application) => {
    app.get('/hi', (request, response) => {

        response.send('this is going to be the project manager app!');
    });
};
