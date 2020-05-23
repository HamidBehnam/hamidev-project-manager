import {db} from "../../common/services/mongodb.service";
import {Collection, InsertOneWriteOpResult} from "mongodb";

export const createProject = async (data: any) => {

    const insertProjectResult: InsertOneWriteOpResult<any> = await db.collection("projects").insertOne({
        ...data,
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
