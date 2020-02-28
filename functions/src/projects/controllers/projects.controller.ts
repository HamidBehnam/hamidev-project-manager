import {Request, Response} from "firebase-functions";
import * as projectsModel from '../models/projects.model';

export const createProject = async (request: Request, response: Response) => {
    try {

        const project = await projectsModel.createProject(request.body);
        response.status(201).send(project);
    } catch (error) {

        response.status(error.status || 500).send(error);
    }
};
