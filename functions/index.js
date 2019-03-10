const functions = require('firebase-functions');
const admin = require('firebase-admin');
// admin initialize
const serviceAccount = require('./secret.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const app = require('./lib/ssr');

exports.ssr = functions.https.onRequest(app);

