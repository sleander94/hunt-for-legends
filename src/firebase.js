import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAPTHOZqQGmt9AP4NQqaBHEs3JYC8cDxnk',
  authDomain: 'hunt-for-legends.firebaseapp.com',
  projectId: 'hunt-for-legends',
  storageBucket: 'hunt-for-legends.appspot.com',
  messagingSenderId: '349374697889',
  appId: '1:349374697889:web:3fc14fb1b00b6abed37be0',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
