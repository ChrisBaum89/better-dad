import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import History from '../components/History';
import Favorites from '../components/Favorites';
import UserSettingsContainer from './UserSettingsContainer';
import NavigationToolbar from '../components/NavigationToolbar';
import { useDispatch } from 'react-redux';
import '../css/App.css'

function NavigationContainer() {

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
            <div className='navigation-button-bar'>
                <NavigationToolbar
                    handleHistory={handleHistoryShow}
                    handleFavorites={handleFavoritesShow}
                    handleSettings={handleSettingsShow}
                    handleLogout={handleLogout}
                />
            </div>

            <History showHistory={showHistory} handleHistoryClose={handleHistoryClose} />

            <Offcanvas show={showSettings} onHide={handleSettingsClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="offcanvas-title">
                            Settings
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <UserSettingsContainer />
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

export default NavigationContainer