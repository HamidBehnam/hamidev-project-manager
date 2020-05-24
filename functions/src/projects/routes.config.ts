import {Application} from "express";
import * as projectsController from './controllers/projects.controller';
import * as commonMiddleware from "../common/middlewares/common.middleware";
import {projectsSchemas} from "./services/schemas.service";
import {commonSchemas} from "../common/services/schemas.service";
import {ValidationDataSource} from "../common/services/constants.service";

export const projectsRoutesConfig = (app: Application) => {
    app.post('/projects', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        commonMiddleware.validator(projectsSchemas.project.full),
        projectsController.createProject
    ]);

    app.get('/projects', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        commonMiddleware.validator(projectsSchemas.getProjects, ValidationDataSource.Query),
        projectsController.getProjects
    ]);

    app.get('/projects/:id', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        projectsController.getProject
    ]);

    app.delete('/projects/:id', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        projectsController.deleteProject
    ]);
};
