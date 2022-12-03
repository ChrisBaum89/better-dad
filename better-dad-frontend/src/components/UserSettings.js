import React from "react";
import Form from 'react-bootstrap/Form'

function UserSettings(props) {

    return (
        <div>
            {props.updateMessaging()}
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder={props.name}
                    disabled={props.disableSettingsEdit}
                    onChange={e => props.setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    placeholder={props.email}
                    disabled={props.disableSettingsEdit}
                    onChange={e => props.setEmail(e.target.value)} />
            </Form.Group>

            {props.settingsButtonDisplay()}

            {props.passwordControl()}

            {props.passwordButtonDisplay()}

        </div>
    )

}

export default UserSettings