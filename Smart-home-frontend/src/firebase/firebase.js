import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDN-A2m9of-MX_0PoO7acIttgi_6brO7bQ',
  authDomain: 'smart-home-nestjs.firebaseapp.com',
  databaseURL: 'https://smart-home-nestjs-default-rtdb.firebaseio.com',
  projectId: 'smart-home-nestjs',
  storageBucket: 'smart-home-nestjs.appspot.com',
  messagingSenderId: '851619920497',
  appId: '1:851619920497:web:629fff48128d008af2b9d0',
  measurementId: 'G-7TD8J34S13',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
