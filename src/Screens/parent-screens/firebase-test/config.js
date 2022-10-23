import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHWrMMHnSfVf8zdcFzDNmLM9grTOWvsSQ',
  authDomain: 'test-23847.firebaseapp.com',
  projectId: 'test-23847',
  storageBucket: 'test-23847.appspot.com',
  messagingSenderId: '551454654011',
  appId: '1:551454654011:web:e31dc0df5cac6da56c661e',
};
if (!firebase.apps.length) {
  console.log('Initializing...');
  firebase.initializeApp(firebaseConfig);
}
export {firebase};

// import {initializeApp} from 'firebase/app';
// import {getFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCHWrMMHnSfVf8zdcFzDNmLM9grTOWvsSQ',
//   authDomain: 'test-23847.firebaseapp.com',
//   projectId: 'test-23847',
//   storageBucket: 'test-23847.appspot.com',
//   messagingSenderId: '551454654011',
//   appId: '1:551454654011:web:e31dc0df5cac6da56c661e',
// };
// let app;
// let db;

// if (!firebase.apps.length) {
//   console.log('Initializing...');
//   app = initializeApp(firebaseConfig);
// }

// db = getFirestore(app);
// export {db};
