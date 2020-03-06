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

export const getProjects = async () => {

    const projectsQuerySnapshot: QuerySnapshot = await db.collection('projects').get();
    return projectsQuerySnapshot.docs.map((projectDocumentSnapshot: DocumentSnapshot) => ({
        ...projectDocumentSnapshot.data(),
        id: projectDocumentSnapshot.id
    }));
};
