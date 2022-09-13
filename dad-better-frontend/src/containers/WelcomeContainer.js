import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginSignupContainer from './LoginSignupContainer';
import Welcome from '../components/Welcome';
import Signup from '../components/Signup';


function WelcomeContainer() {
    


    return (
        <div>
            <LoginSignupContainer/>
            <Welcome />
           
        </div>
    )
}

export default WelcomeContainer