import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Signup from '../components/Signup';
import Image from 'react-bootstrap/Image'
import MyImage from '../img/better-dad-logo.png'


function WelcomeContainer() {



    return (
        <div>
            <div className="better-dad-logo">
                <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
            </div>
            <LoginSignupContainer />
            <Welcome />

        </div>
    )
}

export default WelcomeContainer