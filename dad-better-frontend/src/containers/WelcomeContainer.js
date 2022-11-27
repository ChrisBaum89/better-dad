import React from 'react';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Logo from '../components/Logo';
import AboutLink from '../components/WelcomeLink';
import WelcomeLinks from '../components/WelcomeLink';

function WelcomeContainer() {
    return (
        <div>
            <WelcomeLinks />
            <div className='logo-signin-form'>
                <div className='welcome-logo-spacing'><p>&nbsp;</p></div>
                <div className="welcome-logo">
                    <Logo />
                </div>
                <LoginSignupContainer />
            </div>
            <br></br>
            <br></br>
            <Welcome />
        </div>
    )
}

export default WelcomeContainer