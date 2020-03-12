import * as firebaseAdmin from 'firebase-admin';
import {db} from "../../common/services/firebase.service";
import DocumentReference = firebaseAdmin.firestore.DocumentReference;
import DocumentSnapshot = firebaseAdmin.firestore.DocumentSnapshot;
import QuerySnapshot = firebaseAdmin.firestore.QuerySnapshot;
import {mongodbClient} from "../../common/services/mongodb.service";

export const createProject = async (data: any) => {

    const projectReference: DocumentReference = await db.collection('projects').add(data);
    const projectSnapshot: DocumentSnapshot = await projectReference.get();

    return {
        ...projectSnapshot.data(),
        id: projectSnapshot.id
    };
};

export const getProjects = async (queryParams: any) => {

    const collection: any = mongodbClient.db('gettingStarted').collection('people');

    let results: any;

    await collection.find({}).toArray((err: any, items: any) => {
        if (err) {
            console.error('Caught error', err);
        } else {
            // const results = items.map((item: any) => { return { id: item._id, description: item.description}});
            results = items;
            console.log(results);
        }
    });

    const defaultQueryParams = {
        orderBy: 'createdAt',
        direction: 'asc'
    };

    const metaData = {
        ...defaultQueryParams,
        ...queryParams
    };

    const projectsQuerySnapshot: QuerySnapshot = await db.collection('projects')
        .orderBy(metaData.orderBy, metaData.direction)
        .get();
    return projectsQuerySnapshot.docs.map((projectDocumentSnapshot: DocumentSnapshot) => ({
        ...projectDocumentSnapshot.data(),
        id: projectDocumentSnapshot.id,
        mongodbResults: results
    }));
};
