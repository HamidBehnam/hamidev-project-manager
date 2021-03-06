import {Request, Response} from "firebase-functions";
import * as projectsModel from '../models/projects.model';

export const createProject = async (request: Request, response: Response) => {
    try {

        const projectData = {
            ...request.body,
            createdBy: response.locals.user.uid
        };

        const project = await projectsModel.createProject(projectData);
        response.status(201).send(project);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const getProjects = async (request: Request, response: Response) => {
    try {

        const projects = await projectsModel.getProjects(request.query);
        response.status(200).send(projects);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const getProject = async (request: Request, response: Response) => {
    try {

        const project = await projectsModel.getProject(request.params.id);
        response.status(200).send(project);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const deleteProject = async (request: Request, response: Response) => {
    try {

        await projectsModel.deleteProject(request.params.id);
        response.status(200).send('the project was successfully deleted.');
    } catch (error) {

        response.status(500).send(error);
    }
};

export const updateProject = async (request: Request, response: Response) => {

    try {

        const project = await projectsModel.updateProject(request.params.id, request.body);
        response.status(200).send(project.result);
    } catch (error) {

        response.status(500).send(error);
    }
};
