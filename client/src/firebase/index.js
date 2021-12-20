import firebase from 'firebase/compat/app';
import "firebase/compat/storage"





const firebaseConfig = ({
    "projectId": "celestial-app-197a4",
    "appId": "1:210622071952:web:394ed7447de8da8f110415",
    "storageBucket": "celestial-app-197a4.appspot.com",
    "locationId": "us-east1",
    "apiKey": "AIzaSyCMznxvmTq3NpX5SIsFGxuLBBb1Y-6i-9g",
    "authDomain": "celestial-app-197a4.firebaseapp.com",
    "messagingSenderId": "210622071952",
    "measurementId": "G-21SCCQRV32"
  });


firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export  { storage, firebase as default}
