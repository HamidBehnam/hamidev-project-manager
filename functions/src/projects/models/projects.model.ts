// import * as firebaseAdmin from 'firebase-admin';
// import {firebaseDb} from "../../common/services/firebase.service";
// import DocumentSnapshot = firebaseAdmin.firestore.DocumentSnapshot;
// import QuerySnapshot = firebaseAdmin.firestore.QuerySnapshot;
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

    // let results: any;
    //
    // await projectsCollection.find({}).toArray((err: any, items: any) => {
    //     if (err) {
    //         console.error('Caught error', err);
    //     } else {
    //         // const results = items.map((item: any) => { return { id: item._id, description: item.description}});
    //         results = items;
    //     }
    // });

    const projects = new Promise((resolve, reject) => {
        projectsCollection.find({}).sort({'createdAt': -1}).toArray((error: any, items: any) => {
            if (error) {
                console.error('Caught error', error);
                reject(error);
            } else {
                // const results = items.map((item: any) => { return { id: item._id, description: item.description}});
                resolve(items);
            }
        });
    });

    const projectsResult = await projects;

    // const defaultQueryParams = {
    //     orderBy: 'createdAt',
    //     direction: 'asc'
    // };
    //
    // const metaData = {
    //     ...defaultQueryParams,
    //     ...queryParams
    // };
    //
    // const projectsQuerySnapshot: QuerySnapshot = await firebaseDb.collection('projects')
    //     .orderBy(metaData.orderBy, metaData.direction)
    //     .get();
    // return projectsQuerySnapshot.docs.map((projectDocumentSnapshot: DocumentSnapshot) => ({
    //     ...projectDocumentSnapshot.data(),
    //     id: projectDocumentSnapshot.id,
    //     mongodbResults: projectsResult
    // }));

    return projectsResult;
};
