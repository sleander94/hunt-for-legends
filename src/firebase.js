import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-o64PA0PlGdG8onbOjhMQSDPPQmt8iVw',
  authDomain: 'hunt-for-legends-3f7c3.firebaseapp.com',
  projectId: 'hunt-for-legends-3f7c3',
  storageBucket: 'hunt-for-legends-3f7c3.appspot.com',
  messagingSenderId: '448650670723',
  appId: '1:448650670723:web:957e384764bbf7cd5761b6',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
