import {Application} from "express";
import * as commonMiddleware from '../common/middlewares/common.middleware';
import * as applicantsController from './controllers/applicants.controller';
import {applicantsSchemas} from "./services/schemas.service";
import {commonSchemas} from "../common/services/schemas.service";
import {ValidationDataSource} from "../common/services/constants.service";

export const applicantsRoutesConfig = (app: Application) => {
    app.post('/applicants', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        commonMiddleware.validator(applicantsSchemas.applicant.full, ValidationDataSource.Body),
        applicantsController.createApplicant
    ]);

    app.get('/applicants', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        applicantsController.getApplicants
    ]);

    app.get('/applicants/:id', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        applicantsController.getApplicant
    ]);

    app.delete('/applicants/:id', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        applicantsController.deleteApplicant
    ]);

    app.patch('/applicants/:id', [
        commonMiddleware.validator(commonSchemas.auth, ValidationDataSource.Headers),
        commonMiddleware.isAuthenticated,
        commonMiddleware.validator(applicantsSchemas.applicant.partial),
        applicantsController.updateApplicant
    ]);
};
