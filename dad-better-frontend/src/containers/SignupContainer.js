import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Signup from '../components/Signup';

function LoginContainer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            
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

export default LoginContainer






