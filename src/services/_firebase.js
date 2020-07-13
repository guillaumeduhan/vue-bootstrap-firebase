const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");
require("firebase/analytics");

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DB_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
  })
  .firestore();

// Export types that exists in Firestore
const { Timestamp, Geopoint } = firebase.firestore;
export { Timestamp, Geopoint };

/*
 * Authentication
 */

const createUser = async (mail, password) => {
  return firebase.auth().createUserWithEmailAndPassword(mail, password);
};

export default {
  createUser,
};
