import React from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function NavigationToolbar(props) {
    return (
        <div className="profile-navigation-div">
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={props.handleHistory}>History</Button>
                    <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={props.handleFavorites}>Favorites</Button>
                    <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={props.handleSettings}>Settings</Button>
                    <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={props.handleLogout}>Logout</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default NavigationToolbar