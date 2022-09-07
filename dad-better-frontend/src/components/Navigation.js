import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Navigation extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button>History</Button> <Button>Favorites</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Navigation