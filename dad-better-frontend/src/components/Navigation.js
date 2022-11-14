import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Offcanvas from 'react-bootstrap/Offcanvas';
import History from '../components/History';
import Favorites from '../components/Favorites';
import UserSettings from './UserSettings';
import { useSelector, useDispatch } from 'react-redux';
import '../css/App.css'

function Navigation() {

    const currentUser = useSelector((state) => state.usersReducer.user[0])
    const dispatch = useDispatch()
    const [showHistory, setHistoryShow] = useState(false);
    const [showSettings, setSettingsShow] = useState(false)
    const [showFavorites, setFavoritesShow] = useState(false)

    const handleHistoryClose = () => setHistoryShow(false);
    const handleHistoryShow = () => setHistoryShow(true);
    const handleSettingsClose = () => setSettingsShow(false);
    const handleSettingsShow = () => setSettingsShow(true)
    const handleFavoritesClose = () => setFavoritesShow(false);
    const handleFavoritesShow = () => setFavoritesShow(true)

    const handleLogout = () => {
        localStorage.setItem("jwt", "")
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={handleHistoryShow}>History</Button>
                    <Button onClick={handleFavoritesShow}>Favorites</Button>
                    <Button onClick={handleSettingsShow}>User Settings</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <Offcanvas show={showHistory} onHide={handleHistoryClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="offcanvas-title">
                            Completed Tasks
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <History />
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showSettings} onHide={handleSettingsClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="offcanvas-title">
                            User Settings
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <UserSettings />
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showFavorites} onHide={handleFavoritesClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="offcanvas-title">
                            Favorites
                        </div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Favorites />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navigation