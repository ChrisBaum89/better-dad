import React from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function NavigationToolbar (props) {
    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={props.handleHistory}>History</Button>
                    <Button onClick={props.handleFavorites}>Favorites</Button>
                    <Button onClick={props.handleSettings}>User Settings</Button>
                    <Button onClick={props.handleLogout}>Logout</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default NavigationToolbar