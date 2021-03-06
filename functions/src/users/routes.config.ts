import {Application} from "express";
import * as usersController from './controllers/users.controller';
import * as commonMiddleware from '../common/middlewares/common.middleware';
import {usersSchemas} from "./services/schemas.service";
import {commonSchemas} from "../common/services/schemas.service";
import {ValidationDataSource} from "../common/services/constants.service";

export const usersRoutesConfig = (app: Application) => {
    app.post('/users', [
        usersController.createUser
    ]);

    app.get('/users', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        usersController.listUsers
    ]);

    app.post('/login', [
        commonMiddleware.validator(usersSchemas.login),
        usersController.signInWithEmailAndPassword
    ]);
};
