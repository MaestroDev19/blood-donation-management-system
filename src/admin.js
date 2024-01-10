import * as admin from "firebase-admin";

const serviceAccount = require("./service.json");

export function customInitApp() {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const firestoreDB = admin.firestore();
  const auth = admin.auth();
  const storage = admin.storage();

  return { firestoreDB, auth, storage };
}
