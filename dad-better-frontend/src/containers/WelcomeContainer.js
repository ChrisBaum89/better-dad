import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginContainer from './LoginContainer';
import Welcome from '../components/Welcome';
import Signup from '../components/Signup';


function WelcomeContainer () {
    const [show, setShow] = useState(false);
        
    const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
            <div>
                <LoginContainer handleShow={handleShow} />
                <Welcome />

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Signup</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Signup />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        )
}

export default WelcomeContainer