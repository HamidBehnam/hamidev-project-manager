import * as firebaseAdmin from 'firebase-admin';
import {db} from "../../common/services/firebase.service";
import DocumentReference = firebaseAdmin.firestore.DocumentReference;
import DocumentSnapshot = firebaseAdmin.firestore.DocumentSnapshot;
import QuerySnapshot = firebaseAdmin.firestore.QuerySnapshot;

export const createProject = async (data: any) => {

    const projectReference: DocumentReference = await db.collection('projects').add(data);
    const projectSnapshot: DocumentSnapshot = await projectReference.get();

    return {
        ...projectSnapshot.data(),
        id: projectSnapshot.id
    };
};

export const getProjects = async (queryParams: any) => {

    const defaultQueryParams = {
        limit: 0,
        offset: 0,
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
        id: projectDocumentSnapshot.id
    }));
};
