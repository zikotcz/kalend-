// 1) Vytvořte projekt na https://console.firebase.google.com
// 2) Authentication → Sign-in method → zapněte "Google"
// 3) Firestore Database → vytvořte databázi
// 4) Project settings → Your apps → Web app → zkopírujte config sem:
export const firebaseConfig = {
  apiKey: "VLOZTE_API_KEY",
  authDomain: "VAS-PROJEKT.firebaseapp.com",
  projectId: "VAS-PROJEKT",
  storageBucket: "VAS-PROJEKT.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000",
};

// E-maily správců, kteří schvalují přístup (musí odpovídat i firestore.rules).
export const ADMIN_EMAILS = ["admin@example.com"];
