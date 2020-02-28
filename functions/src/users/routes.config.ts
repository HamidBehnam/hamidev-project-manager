import {Application} from "express";
import * as usersController from './controllers/users.controller';

export const usersRoutesConfig = (app: Application) => {
    app.post('/users', [
        usersController.createUser
    ]);

    app.get('/users', [
        usersController.listUsers
    ]);

    app.post('/login', [
        usersController.signInWithEmailAndPassword
    ]);
};
