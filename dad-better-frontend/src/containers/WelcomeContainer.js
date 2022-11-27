import React from 'react';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Logo from '../components/Logo';

function WelcomeContainer() {
    return (
        <div>
            <Logo />
            <LoginSignupContainer />
            <br></br>
            <br></br>
            <Welcome />
        </div>
    )
}

export default WelcomeContainer