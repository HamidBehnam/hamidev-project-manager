import {Request, Response} from "express";
import * as applicantsModel from "../models/applicants.model";

export const createApplicant = async (request: Request, response: Response) => {
    try {

        const applicantData = {
            ...request.body,
            userId: response.locals.user.uid,
        };

        const applicant = await applicantsModel.createApplicant(applicantData);
        response.status(201).send(applicant);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const getApplicants = async (request: Request, response: Response) => {

    try {

        const applicants = await applicantsModel.getApplicants();
        response.status(200).send(applicants);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const getApplicant = async (request: Request, response: Response) => {

    try {

        const applicant = await applicantsModel.getApplicant(request.params.id);
        response.status(200).send(applicant);
    } catch (error) {

        response.status(500).send(error);
    }
};

export const deleteApplicant = async (request: Request, response: Response) => {

    try {

        await applicantsModel.deleteApplicant(request.params.id);
        response.status(200).send('the applicant was successfully deleted!');
    } catch (error) {

        response.status(500).send(error);
    }
};

export const updateApplicant = async (request: Request, response: Response) => {

    try {

        const applicant = await applicantsModel.updateApplicant(request.params.id, request.body);
        response.status(200).send(applicant);
    } catch (error) {

        response.status(500).send(error);
    }
};
