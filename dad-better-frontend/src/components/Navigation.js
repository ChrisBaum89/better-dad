import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Offcanvas from 'react-bootstrap/Offcanvas';
import History from '../components/History';
import { useSelector, useDispatch } from 'react-redux';

function Navigation(){

    const currentUser = useSelector((state) => state.usersReducer.user[0])
    const dispatch = useDispatch()
    const [show, setHistoryShow] = useState(false);

    const handleHistoryClose = () => setHistoryShow(false);
    const handleHistoryShow = () => setHistoryShow(true);

    const handleLogout = () => {
        localStorage.setItem("jwt", "")
        dispatch({type: "LOGOUT"})
    }

    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={handleHistoryShow}>History</Button>
                    <Button>Favorites</Button>
                    <Button>User Profile</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <Offcanvas show={show} onHide={handleHistoryClose}>
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