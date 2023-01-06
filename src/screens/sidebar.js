import React, { useState } from "react";
import logo from '../ui/Logo.svg';

import {NavLink} from "react-router-dom";

function Sidebar(){

    const [nav, setNav] = useState ([
        {label: "Home", slug: "/", icon: "icon-home" },
        {label: "Discover", slug: "discover", icon: "icon-search" },
        {label: "Categories", slug: "cates", icon: "icon-label" },
        {label: "My Courses", slug: "my-courses", icon: "icon-cases" }
    ])
    const [currentPage,setCurrentPage] = useState("/");

    var navigation = [];
    for (let i = 0; i < nav.length; i++){
        navigation.push(
        <li key={"nav-" + i + "-" + nav[i].slug}>
            <NavLink to={nav[i].slug} className={"aic link noul flex c333" }>
                <div className={"ico s18 " + nav[i].icon} />
                <h2 className="lbl s18">{nav[i].label}</h2>
            </NavLink>
        </li>
        );
    }

    //console.log(global.fire);




    return (
        <div className="sidebar rel">
            < a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
            <ul className="nav">
                {navigation}

            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lightbulb cfff s24 ico" />
                <div className="lbl s15 fontb c333 " >
                    Updated Courses
                    <h2 className="author s12 c777 ">  by Nimantha Madusanka</h2>
                </div>
            
            </div>

            <div className="stats aic flex">

                <div className="stats-box flex ">
                    <div className="ico ico-points 24 icon-shield" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s12 c777">Points</h2>
                </div>

                <div className="stats-box flex ">
                    <div className="ico ico-battery s24 icon-battery_charging_full" />
                    <h2 className="val s15 c333 fontb">40.4%</h2>
                    <h2 className="lbl s12 c777">Complete</h2>
                </div>

            </div>

            <div className="me flex aic">
                <div className="photo cfff s24">
                    <img src="http://placeimg.com/100/100/people" className= "bl"/>
                </div>
                <div className="lbl s15 fontb c333 " >
                    Nimantha Madusanka
                    <h2 className="uname s12 c777 ">@nimantha</h2>
                </div>
            
            </div>

        </div>
    )
}

export default Sidebar;