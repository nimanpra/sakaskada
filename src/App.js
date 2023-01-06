import React from 'react';
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


function App() {
      //<Rightbar />

      const initFirebase = async () => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          console.log(user);
        });
      }




  return (
    <div className="App flex">
      <HashRouter>
       <Sidebar />
       <div className="app-content">  
         <Route exact path="/" component={HomePage } />
         <Route path="/course/:courseid" component={CoursePage} />
         <div className="app-content-discover">  
         <Route path="/discover" component={DiscoverPage} /> <Rightbar/>
         </div>
         <Route path="/cates" component={CategoriesPage} />
         <Route path="/my-courses" component={MyCoursesPage} />
      </div>
      
      </HashRouter>
    </div>
  );
} 

export default App;

