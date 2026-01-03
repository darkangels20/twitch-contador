import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLGXAammzcMVx9FT0cQxgLMFoAZp6R0LI",
    authDomain: "contador-twitch.firebaseapp.com",
    projectId: "contador-twitch",
    storageBucket: "contador-twitch.appspot.com",
    messagingSenderId: "174460937156",
    appId: "1:174460937156:web:c2c8c2bac2abd703d37a91"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

onValue(ref(db, "equipoA"), (snap) => {
  document.getElementById("scoreA").innerText = snap.val() ?? 0;
});

onValue(ref(db, "equipoB"), (snap) => {
  document.getElementById("scoreB").innerText = snap.val() ?? 0;
});
