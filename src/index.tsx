import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import initializeApp = firebase.initializeApp;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZFhBZbbqsQFnfEFOnD1YQXFeZtgb4gvQ",
    authDomain: "rewrite-chat-react.firebaseapp.com",
    projectId: "rewrite-chat-react",
    storageBucket: "rewrite-chat-react.appspot.com",
    messagingSenderId: "667346488819",
    appId: "1:667346488819:web:d389de311dcf80defa1686"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const Context = createContext<any>(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{firebase, auth, firestore}}>
        <App/>
    </Context.Provider>

);

