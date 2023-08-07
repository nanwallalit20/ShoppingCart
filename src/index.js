import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCBEPjTp_KTJXLsOqfdzrFv2C35QMmZ5vI",
  authDomain: "cart-product-add1a.firebaseapp.com",
  projectId: "cart-product-add1a",
  storageBucket: "cart-product-add1a.appspot.com",
  messagingSenderId: "334980780413",
  appId: "1:334980780413:web:cac03c7dcbef57800cbc14"
};

// Initialize Firebase 
 const app=initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App firebaseApp={app} />
  </React.StrictMode>
);


