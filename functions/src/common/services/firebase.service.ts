import * as firebaseAdmin from 'firebase-admin';
import * as firebaseClient from 'firebase';
import AdminAuth = firebaseAdmin.auth.Auth;
import ClientAuth = firebaseClient.auth.Auth;

const firebaseClientConfig = {
    apiKey: "AIzaSyDdr7gWEZjcc3FoG1rskKiD_8Gn-sxQ1Ck",
    authDomain: "hamidev-project-manager.firebaseapp.com",
    databaseURL: "https://hamidev-project-manager.firebaseio.com",
    projectId: "hamidev-project-manager",
    storageBucket: "hamidev-project-manager.appspot.com",
    messagingSenderId: "1051154798313",
    appId: "1:1051154798313:web:c45bd5963e5b7a09b18278",
    measurementId: "G-WZ4ZQXZN6L"
};

firebaseClient.initializeApp(firebaseClientConfig);
firebaseAdmin.initializeApp();

export const adminAuth: AdminAuth = firebaseAdmin.auth();
export const clientAuth: ClientAuth = firebaseClient.auth();
