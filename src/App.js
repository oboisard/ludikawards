import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Get a list of cities from your database
async function getEvents() {
  const eventsCol = collection(db, 'events');
  const eventsSnapshot = await getDocs(eventsCol);
  const eventsList = eventsSnapshot.docs.map(doc => doc.data());
  return eventsList;
}

function App() {

  getEvents().then((list) => {
    console.log(list);
  });

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
