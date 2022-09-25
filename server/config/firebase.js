
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";
const { getFirestore, collection, getDocs } = require("firebase/firestore/lite");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAKLV6F9OhHeRcOmNPlZvjrco2AK5hsfSQ",
  authDomain: "ludiquawards.firebaseapp.com",
  databaseURL: "https://ludiquawards-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ludiquawards",
  storageBucket: "ludiquawards.appspot.com",
  messagingSenderId: "603136902164",
  appId: "1:603136902164:web:bc2800c526cec907c71301",
  measurementId: "G-9JNMDMJGKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Get a list of cities from your database
const getEvents = async () => {
  const eventsCol = collection(db, 'events');
  const eventsSnapshot = await getDocs(eventsCol);
  const eventsList = eventsSnapshot.docs.map(doc => doc.data());
  return eventsList;
}

module.exports = {
  getEvents
}
