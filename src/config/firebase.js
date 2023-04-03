import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBTPpf4CsnK2kpr67WkvNZP8TuEJHu2_oM",
  authDomain: "tiktok---jornada-351ee.firebaseapp.com",
  projectId: "tiktok---jornada-351ee",
  storageBucket: "tiktok---jornada-351ee.appspot.com",
  messagingSenderId: "887633896722",
  appId: "1:887633896722:web:a4bd2e84a5a1da89d2bfcb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


