import React from "react";
import AboutLinks from "./AboutLinks";
import Logo from "./Logo";
import "../css/App.css"


function About() {
    return (
        <div className='about-page'>
            <AboutLinks />
            <div className='about-better-dad-logo'>
            <Logo />
            </div>
                <div className='about-div'>
                    <div className='about-content'>
                        <h1>How It Works</h1>
                        <h5>You will be assigned daily tasks to complete. Some
                            tasks are to tell dad jokes to others and some are to completed chores around the house.  Every day
                            new tasks will be loaded. You can gain achievements in the form of badges to show how great of a
                            dad you are! The completion of a task is self-reporting, so though you could cheat, your honor as a man is on the line!
                        </h5>
                    </div>
            </div>
            </div>
    )
}
export default About