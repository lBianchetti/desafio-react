import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyDMSD-XUtCWF_73VFYMkqlZHi-W4wfyCBQ",

  authDomain: "teste-6ee37.firebaseapp.com",

  projectId: "teste-6ee37",

  storageBucket: "teste-6ee37.appspot.com",

  messagingSenderId: "891779311878",

  appId: "1:891779311878:web:2d3c7c00aa1a0309695687"

};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
