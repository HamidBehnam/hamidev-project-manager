import {db, mongoReference} from "../../common/services/mongodb.service";
import {Collection, DeleteWriteOpResultObject, InsertOneWriteOpResult} from "mongodb";

export const createProject = async (projectData: any) => {

    const insertProjectResult: InsertOneWriteOpResult<any> = await db.collection("projects").insertOne({
        ...projectData,
        createdAt: new Date()
    });

    return insertProjectResult.ops[0];
};

export const getProjects = async (queryParams: any) => {

    const projectsCollection: Collection = db.collection('projects');

    const defaultQueryParams = {
        orderBy: 'createdAt',
        direction: '1',
        limit: '10',
        page: '1'
    };

    const metaData = {
        ...defaultQueryParams,
        ...queryParams
    };

    const query: any = {};

    if (metaData.status) {
        query.status = {
            $in: metaData.status.split("|")
        };
    }

    if (metaData.priority) {
        query.priority = {
            $in: metaData.priority.split("|")
        };
    }

    return await projectsCollection.find(query)
        .skip((+ metaData.page - 1) * + metaData.limit)
        .limit(+ metaData.limit)
        .sort({[metaData.orderBy]: + metaData.direction})
        .toArray();
};

export const getProject = async (projectId: string) => {

    const projectIdObject = new mongoReference.ObjectID(projectId);
    return await db.collection('projects').findOne({_id: projectIdObject});
};

export const deleteProject = async (projectId: string) => {

    const projectIdObject = new mongoReference.ObjectID(projectId);
    const deletionResult: DeleteWriteOpResultObject = await db.collection('projects').deleteOne(
        {_id: projectIdObject}
        );

    if (deletionResult.deletedCount === 0) {
        throw {
            message: `can't find the requested project to delete`
        };
    }
};

export const updateProject = async (projectId: string, projectData: any) => {

    const projectIdObject = new mongoReference.ObjectID(projectId);
    return await db.collection('projects').updateOne(
        { _id: projectIdObject },
        { $set: projectData }
        );
};
