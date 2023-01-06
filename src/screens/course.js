import React, {useState} from "react";

import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.png";

function CoursePage(props){

    const [Course, setCourse] =useState(
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            about: "In this class I will teach you how to make your illustration look really good. We're gonna study a lot of cases here,setting your work panel, making some awsome actions and presets for future. </br> Hope you'll get some really useful tips. Good Luck" ,
            tutor:{
                ID: 1,
                name: "Melani Sneha",
                username: "@melani",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min", 
            poster: Course1,

            videos: [
                {
                    ID: 1,
                    title: "Introduction",
                    duration: "03 min 24 secs"
                },
                {
                    ID: 2,
                    title: "Getting Started",
                    duration: "09 min 55 secs"
                },
                {
                    ID: 3,
                    title: "The Illustration",
                    duration: "63 min 48 secs"
                }
            ]
        },

    );

   // const courseID = props.match.params.courseid;

    var courseVideos = [];
    for(let i = 0; i < Course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-"+ i} className="noul aic rel flex">
            <div className="id s18 fontn cfff">{Course.videos[i].ID}</div>
            <div className="meta rel">
                <h1 className="s15 lbl fontb c333">{Course.videos[i].title}</h1>
                <h1 className="s13 dur fontn c777">{Course.videos[i].duration}</h1>
            
            </div>
            </a>
        );
    }

    //console.log(props);






    return (
        <div className="course-page rel flex">

        <div className="course-info rel">

                <div className="tutor rel aic flex">
                    <div className="pic">
                        <img src={Course.tutor.dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333"> {Course.tutor.name}</h2>
                        <h2 className="s13 uname fontn c777"> Course Tutor</h2>
                    </div>
                </div>

        <div className="course-meta">
            <h2 className="s24 title fontb c333"> {Course.title}</h2>
            <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: Course.about}} />
            
                <div className="section section-b rel">
                    <h2 className="title s24 fontb">Course <span className="fontn">Acievements</span></h2>
                        <div className="course-stats aic flex">

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
                    <div className="stats-box flex ">
                        <div className="ico ico-battery s24 icon-battery_charging_full" />
                        <h2 className="val s15 c333 fontb">+27</h2>
                        <h2 className="lbl s12 c777">Complete</h2>
                    </div>
                </div>


                    <div className="section section-b rel">
                    <h2 className="title s24 fontb">Course <span className="fontn">Details</span></h2>
                        <div className="course-videos aic flex">
                            {courseVideos}
                        </div>
                    </div>
                </div>

        </div>

        </div>

        <div className="course-preview rel">

                <div className="player rel">
                    <video poster={Course.poster} />
                    <div className="ctrls abs aic flex">
                        <button className="icon-pause_circle_filled pp s24" />
                        <div className="timer rel fontb s13 cfff" >
                            02:54 / 09:55
                        </div>
                        <div className="slider rel" >
                            <div className="prog rel">
                                <div className="bar rel">
                                    <div className="knob abs" />
                                </div>
                                </div>
                                </div>
                        <button className="icon-volume_up vol s24" />
                        <button className="icon-fullscreen fs s24" />
                        
                    </div>
            </div>

            <div className="extras-block rel">

                <div className="chat rel">
                <div className="section section-b rel">
                    <h2 className="title s24 fontb">Quick <span className="fontn">Chat</span></h2>
                        <div className="messages aic flex">
                            <div className="bubble rel">
                                <h2 className="txt s15 c333">I am new to the class</h2>
                            </div>
                            <div className="bubble rel">
                                <h2 className="txt s15 c333">Love this course...</h2>
                            </div>
                            <div className="bubble bubble-mine rel">
                                <h2 className="txt s15 c333">Hello</h2>
                            </div>
                            <div className="bubble bubble mine rel">
                                <h2 className="txt s15 c333">Very informative! Thanks!@</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="now-watching rel">
                <div className="you rel aic flex">
                    <h2 className="title s24 fontb">Now <span className="fontn">watching</span></h2>
                </div>
                <div className="you rel aic flex">
                    <div className="pic">
                        <img src="http://placeimg.com/100/100/people?guest-1" className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333"> Grey Montgommery</h2>
                        <h2 className="s13 uname fontn c777"> @gregdomm</h2>
                    </div>
                </div>
                <div className="you rel aic flex">
                    <div className="pic">
                        <img src="http://placeimg.com/100/100/people?guest-2" className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333"> Lila Jefferson</h2>
                        <h2 className="s13 uname fontn c777"> @leilalearns</h2>
                   .0 </div>
                </div>

            </div>
            
        </div>
        </div>
    </div>)
    
}

export default CoursePage;