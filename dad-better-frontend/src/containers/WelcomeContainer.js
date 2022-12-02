import React from 'react';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Logo from '../components/Logo';
import WelcomeLinks from '../components/WelcomeLink';

function WelcomeContainer() {
    return (
        <div>
            <div><WelcomeLinks /></div>
            <div className="welcome-logo">
                <Logo />
            </div>
            <div className='logo-signin-form'>
                {/* <div className='welcome-logo-spacing'><p>&nbsp;</p></div> */}

                <LoginSignupContainer />
            </div>
            <br></br>
            <br></br>
            <Welcome />
        </div>
    )
}

export default WelcomeContainer