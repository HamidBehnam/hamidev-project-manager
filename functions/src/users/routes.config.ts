import {Application} from "express";
import * as usersController from './controllers/users.controller';
import * as commonMiddleware from '../common/middlewares/common.middleware';
import {usersSchemas} from "./services/schemas.service";

export const usersRoutesConfig = (app: Application) => {
    app.post('/users', [
        usersController.createUser
    ]);

    app.get('/users', [
        usersController.listUsers
    ]);

    app.post('/login', [
        commonMiddleware.validator(usersSchemas.login),
        usersController.signInWithEmailAndPassword
    ]);
};
