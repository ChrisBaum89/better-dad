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
                <h1>About</h1>
                    <h5><p>Being a dad is amazing and enriches your life!  But just like many things worth doing in life, you do it for a long time, day after day.
                        This can lead to moments of boredom, frustration, and depression as you try to navigate family life and
                        work life. This can be a difficult feeling for dads to feel as it can sometimes feel like society looks down upon these feelings
                        and we should be "putting our kids first". I will tell you from personal experience and those of friends that you are a better parent
                        when you feel like you are mentally in a good place.</p>
                        <p>This application was created to help dads become more productive and enjoy embracing being a dad. This project was inspired by a TED talk that I listened to about how Jane McGonigal fought
                        severe depression by treating her life like a game to get little wins and progress through challenging times and emotions.</p>
                    </h5>
                    <div className="video-outer-div">
                        <div className="video-inner-div">
                            <iframe
                                id="ted-video"
                                className="ted-video"
                                title="ted-video"
                                src="https://embed.ted.com/talks/lang/en/jane_mcgonigal_gaming_can_make_a_better_world"
                                width="854"
                                height="480"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <br></br>
                    <h1>How It Works</h1>
                    <h5>You will be assigned daily tasks to complete. Some
                        tasks are to share the joy of dad jokes with others and some are to completed chores around the house.  Every day
                        new tasks will be loaded. You can gain achievements in the form of badges to show how great of a
                        dad you are! The completion of a task is self-reporting, so though you could cheat, your honor as a man is on the line!
                    </h5>
                    <br></br>
                    <h5>The badges you earn are typically in the theme of the funny stereotype of the "old school dad", which may or may not apply to you. These are just for laughs
                        and are no way representative of how you should be. You do you and be the dad that you think you should be!
                    </h5>
                    <br></br>
                    <h5>
                        This project was created using React (v18.2.0). Redux (v4.2.0) and Thunk (v2.4.1) are utilized for state management. The React application fetches data from a Ruby on Rails API (v6.1.6).
                        Pictures used are from <a href="https://www.pexels.com/">Pexels</a>.
                    </h5>
                </div >
            </div>
        </div >
    )
}
export default About