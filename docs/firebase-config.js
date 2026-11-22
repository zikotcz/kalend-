// 1) Vytvořte projekt na https://console.firebase.google.com
// 2) Authentication → Sign-in method → zapněte "Google"
// 3) Firestore Database → vytvořte databázi
// 4) Project settings → Your apps → Web app → zkopírujte config sem:
export const firebaseConfig = {
  apiKey: "AIzaSyA6sC1oWY-XR7z0hDtk_p7CSBxsiTf3yY4",
  authDomain: "kalend-4f96f.firebaseapp.com",
  projectId: "kalend-4f96f",
  storageBucket: "kalend-4f96f.firebasestorage.app",
  messagingSenderId: "795160808707",
  appId: "1:795160808707:web:b61cc763a6ac0762b2ad36",
};

// E-maily správců, kteří schvalují přístup (musí odpovídat i firestore.rules).
export const ADMIN_EMAILS = ["honzik.kozak.hkk@gmail.com"];

// Web client ID z Firebase: Authentication → Sign-in method → Google → Web SDK configuration.
// Když je vyplněné, přihlášení jde přímo přes Google tlačítko (funguje i v Safari na iPhonu).
export const GOOGLE_CLIENT_ID = "";
