import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signInWithCredential, signOut, onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, collection,
  query, orderBy, serverTimestamp, addDoc, deleteDoc, where,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, ADMIN_EMAILS, GOOGLE_CLIENT_ID } from "./firebase-config.js";
export { GOOGLE_CLIENT_ID };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const isAdmin = (user) =>
  !!user && user.emailVerified && ADMIN_EMAILS.includes(user.email);

export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider);
}

/** Přihlášení tokenem z Google Identity Services (bez přesměrování přes firebaseapp.com). */
export function loginWithGoogleIdToken(idToken) {
  return signInWithCredential(auth, GoogleAuthProvider.credential(idToken));
}

export const logout = () => signOut(auth);

/** Zajistí, že uživatel má záznam v kolekci users (nový = "pending"). */
export async function ensureUserDoc(user) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      name: user.displayName || "",
      photo: user.photoURL || "",
      status: "pending",
      createdAt: serverTimestamp(),
    });
  }
  return ref;
}

export {
  onAuthStateChanged, doc, updateDoc, onSnapshot, collection, query, orderBy,
  serverTimestamp, addDoc, deleteDoc, where,
};
