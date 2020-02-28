import * as firebaseAdmin from "firebase-admin";
import * as firebaseClient from 'firebase';
import UserRecord = firebaseAdmin.auth.UserRecord;
import ListUsersResult = firebaseAdmin.auth.ListUsersResult;
import UserCredential = firebaseClient.auth.UserCredential;
import {adminAuth, clientAuth} from "../../common/services/firebase.service";

export const createUser = async (data: any) => {
    const user: UserRecord = await adminAuth.createUser(data);

    return {
        ...user,
        additionalInfo: 'reserved for sending additional info'
    };
};

export const listUsers = async () => {
    const users: ListUsersResult = await adminAuth.listUsers();

    return {
        ...users,
        count: users.users.length
    };
};

export const signInWithEmailAndPassword = async (data: any) => {
    const userCredential: UserCredential = await clientAuth.signInWithEmailAndPassword(data.email, data.password);

    if (userCredential.user) {

        return userCredential.user.getIdToken(true);
    } else {

        throw {
            status: 404,
            message: 'user does not exist.'
        };
    }
};
