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

// Escuchar el puntaje global
const scoreRef = ref(db, "puntaje");

onValue(scoreRef, (snapshot) => {
  const valor = snapshot.val();
  console.log("Puntaje recibido:", valor);
  document.getElementById("score").innerText = valor ?? 0;
});
