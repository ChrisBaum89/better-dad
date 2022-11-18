import React from 'react';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Image from 'react-bootstrap/Image'
import MyImage from '../img/better-dad-logo.png'

function WelcomeContainer() {
    return (
        <div>
            <div className="better-dad-logo">
                <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
            </div>
            <LoginSignupContainer />
            <br></br>
            <br></br>
            <Welcome />
        </div>
    )
}

export default WelcomeContainer