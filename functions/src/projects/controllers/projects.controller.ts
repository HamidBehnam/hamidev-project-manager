import {Request, Response} from "firebase-functions";
import * as projectsModel from '../models/projects.model';
import * as firebaseAdmin from "firebase-admin";
import FieldValue = firebaseAdmin.firestore.FieldValue;

export const createProject = async (request: Request, response: Response) => {
    try {

        const projectData = {
            ...request.body,
            createdAt: FieldValue.serverTimestamp(),
            createdBy: response.locals.user.uid
        };

        const project = await projectsModel.createProject(projectData);
        response.status(201).send(project);
    } catch (error) {

        response.status(error.status || 500).send(error);
    }
};

export const getProjects = async (request: Request, response: Response) => {
    try {

        const projects = await projectsModel.getProjects(request.query);
        response.status(200).send(projects);
    } catch (error) {

        response.status(error.status || 500).send(error);
    }
};
