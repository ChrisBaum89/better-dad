import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Offcanvas from 'react-bootstrap/Offcanvas';
import History from '../components/History';

function Navigation(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={handleShow}>History</Button>
                    <Button>Favorites</Button>
                    <Button>User Profile</Button>
                    <Button>Logout</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Completed Tasks</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <History/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navigation