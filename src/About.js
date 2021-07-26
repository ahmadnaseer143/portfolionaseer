import React from 'react'
import "./about.css";
import Project from "./Projects";
import instagram from "./Images/instagram.PNG";
import movieapp from "./Images/movieapp.PNG";
import reactrouter from "./Images/react-router.PNG";
import birthdayreminder from "./Images/birthdayreminder.PNG";
const About = () => {
    return (
    <section className="about container" id="about">
        <div className="row">
        <div className="col-12 about-header">
            <div className="mx-auto">
                <h1 className="text-primary mt-5">Projects Done</h1>
                <div className="line"></div>
            </div>
        </div>
        </div>
        <div className="row">
            <Project url="https://miro.medium.com/max/1400/1*D-_9pqeEF1lw-ZZaldohbw.png" title="Amazon Clone React"/>
            <Project url={instagram} title="Instgram Clone React"/>
        </div>
        <div className="row">
            <Project url={movieapp} title="Movie App React"/>
            <Project url={reactrouter} title="React Router Webpage"/>
            <Project url={birthdayreminder} title="React Birthday Reminder"/>
        </div>
    </section>
    )
}

export default About