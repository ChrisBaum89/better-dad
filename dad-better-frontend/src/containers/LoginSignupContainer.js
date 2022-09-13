import React, {useState} from 'react';
import LoginSignupForm from '../components/LoginSignupForm';
import Signup from '../components/Signup';
import Offcanvas from 'react-bootstrap/Offcanvas';

function LoginSignupContainer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <LoginSignupForm handleShow={handleShow}/>

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

export default LoginSignupContainer