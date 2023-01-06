//import { stripLeadingSlash } from 'history/pathutils';
//import React from 'React'
import React, { useState, useEffect } from 'react';
//import AppContext from './AppContext';
import logo from './ui/Logo.svg';


//import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
//import logo from '../ui/logo-coral.svg';
import "./css/uifonts.css";
import "./css/props.css";
import "./css/App.css";

//Screen
import Header from "./screens/Header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from './screens/discover';
import CategoriesPage from './screens/categories';
import MyCoursesPage from './screens/mycourses';
import {Route, NavLink, HashRouter} from "react-router-dom";



import * as fire_base from "firebase/app";
import 'firebase/auth'
//require('firebase/auth');

//import { getAuth } from "firebase/auth";

import { getAuth, onAuthStateChanged } from "firebase/auth";

global.firebase = fire_base;



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCxMHhLg3R7R1XrHXNduqhRtTshofAHkE",
  authDomain: "e-learning-platform-1b724.firebaseapp.com",
  projectId: "e-learning-platform-1b724",
  storageBucket: "e-learning-platform-1b724.appspot.com",
  messagingSenderId: "276198388302",
  appId: "1:276198388302:web:e2088cd744ffeaf451c91f",
  measurementId: "G-7TZFV0H32M"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
global.firebase.initializeApp(firebaseConfig);


export default function AppLoader (){

    const [isFireUser, setIsFireUser] = useState(false);

    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
        });



    const splash = (context) => {
        return (
            <div className="App flex">
                <div className="splash abs abc" >
                <img src={logo} className="bl"/>
                </div>
            </div>
        )
    }

    const loadApp = async(context) => {
         //await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ?
                        <div className="App flex">
                                <HashRouter>
                                <Sidebar />
                                <div className="app-content">
                                    <Route exact path="/" component={HomePage}/>
                                    <Route path="/course/:courseid" component={CoursePage} />
                                    <Route path="/discover" component={DiscoverPage} />
                                    <Route path="/cates" component={CategoriesPage} />
                                    <Route path="/my-courses" component={MyCoursesPage} />
                                </div>
                                </HashRouter>
                            </div>
                            :
                            <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}
