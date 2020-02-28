import * as firebaseAdmin from "firebase-admin";
import UserRecord = firebaseAdmin.auth.UserRecord;
import {adminAuth} from "../../common/services/firebase.service";

export const createUser = async (data: any) => {
    const user: UserRecord = await adminAuth.createUser(data);

    return {
        ...user,
        additionalInfo: 'reserved for sending additional info'
    };
};
