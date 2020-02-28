import {Application} from "express";
import * as projectsController from './controllers/projects.controller';

export const projectsRoutesConfig = (app: Application) => {
    app.post('/projects', [
        projectsController.createProject
    ]);
};
