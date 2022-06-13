import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdt1VGFTI5aaeBXlcFWx2MkiC63HsutJs",
    authDomain: "invoice-app-ad8b0.firebaseapp.com",
    projectId: "invoice-app-ad8b0",
    storageBucket: "invoice-app-ad8b0.appspot.com",
    messagingSenderId: "949295874638",
    appId: "1:949295874638:web:f04804d6ffd4c224a4f91f"
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

const db = getFirestore(firebaseApp);

export default db;