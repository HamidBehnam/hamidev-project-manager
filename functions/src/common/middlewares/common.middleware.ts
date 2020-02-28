import {Request, Response} from "firebase-functions";
import {NextFunction} from "express";
import {ValidationDataSource} from "../services/constants.service";
import {validate} from "../services/validate.service";

export const validator = (schema: any, dataSource?: ValidationDataSource) => {

    return (request: Request, response: Response, next: NextFunction) => {

        let validationDataSource;

        switch (dataSource) {
            case ValidationDataSource.Headers:
                validationDataSource = request.headers;
                break;
            case ValidationDataSource.Body:
            default:
                validationDataSource = request.body;
                break;
        }

        const validationResult = validate(schema, validationDataSource);

        if (validationResult.valid) {

            next();
        } else {

            response.status(400).send(validationResult.errors);
        }
    };
};
