import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBb_8kZUSkIkEBW78fJ2PsirqxQjCViklw",
  authDomain: "giostore-db.firebaseapp.com",
  projectId: "giostore-db",
  storageBucket: "giostore-db.firebasestorage.app",
  messagingSenderId: "664774799828",
  appId: "1:664774799828:web:f337b59deb183e3e8ea641"
}

export const app = initializeApp(firebaseConfig)