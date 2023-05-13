import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyBwtKumut3Kl6yW3O0RaQm6Xg4HCgmVzZU",
        authDomain: "symfony-firebase-854b3.firebaseapp.com",
        projectId: "symfony-firebase-854b3",
        storageBucket: "symfony-firebase-854b3.appspot.com",
        messagingSenderId: "1062289678336",
        appId: "1:1062289678336:web:719132a02b3b248048b8e5",
        measurementId: "G-FG45E1B4MP"
};

const vapIdKey  = 'BPmDzvOQsY4FzHCC8NY_luLTyPdAA7_8oYuhLLvgzpBzegCs-Lqr9VtXgUAGKaWovPvXhPmnzitAGm2vBLgb_aM';

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export { messaging , vapIdKey };