import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Config to connect to firebase
const firebaseConfig = {
    apiKey: "AIzaSyB084g9zP05fjSEbv88jn251yh-5b2_K48",
    authDomain: "fir-nhom6-b461a.firebaseapp.com",
    projectId: "fir-nhom6-b461a",
    storageBucket: "fir-nhom6-b461a.appspot.com",
    messagingSenderId: "520720408827",
    appId: "1:520720408827:web:c1e7063c526365e430d05e",
    measurementId: "G-KWQR4NDCGG"
};

// method init app
const app = initializeApp(firebaseConfig);

// get db
// export to use in global file
export const db = getFirestore(app);