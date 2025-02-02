import {get, getDatabase, ref} from "firebase/database";

import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH5XikbceO_CLlHY83DGUN3UDMU_wB7VA",
  authDomain: "portfolio2025-558c0.firebaseapp.com",
  databaseURL:
    "https://portfolio2025-558c0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio2025-558c0",
  storageBucket: "portfolio2025-558c0.firebasestorage.app",
  messagingSenderId: "481722440417",
  appId: "1:481722440417:web:ef24fb1f033aa8d3b1f5a0",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};
