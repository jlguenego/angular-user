import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { app } from './ssr';


// admin initialize
import serviceAccount from '../secret.json';

admin.initializeApp({
    credential: admin.credential.cert(<admin.ServiceAccount>serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

export const toto = functions.https.onRequest((request, response) => {
    response.send("Toto from Firebase!");
});


// export const ssr = functions.https.onRequest(app);


