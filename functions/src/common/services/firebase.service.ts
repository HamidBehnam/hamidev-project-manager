import * as firebaseAdmin from 'firebase-admin';
import * as firebaseClient from 'firebase';
import Firestore = firebaseAdmin.firestore.Firestore;
import AdminAuth = firebaseAdmin.auth.Auth;
import ClientAuth = firebaseClient.auth.Auth;
import {firebaseClientConfig} from "./config.service";

firebaseClient.initializeApp(firebaseClientConfig);
firebaseAdmin.initializeApp();

export const db: Firestore = firebaseAdmin.firestore();
export const adminAuth: AdminAuth = firebaseAdmin.auth();
export const clientAuth: ClientAuth = firebaseClient.auth();
