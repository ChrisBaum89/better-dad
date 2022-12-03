import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserSettings from "../components/UserSettings";
import { fetchUser } from "../actions/userActions";

function UserSettingsContainer() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const userId = currentUser.data.id
    const [disableSettingsEdit, setDisableSettingsEdit] = useState(true)
    const [disablePasswordEdit, setDisablePasswordEdit] = useState(true)
    const [name, setName] = useState(currentUser.data.attributes.name)
    const [email] = useState(currentUser.data.attributes.email)
    const [existingPassword, setExistingPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [updateMessage, setUpdateMessage] = useState(0)

    useEffect(() => {userSettingsMessage(currentState.usersReducer.user[0].message)})

    const handleSettingsSubmit = (userId, name, email) => {
        updateUserToServer(userId, name, email)
        setDisableSettingsEdit(true)
    }

    const handlePasswordSubmit = (userId, existingPassword, newPassword) => {
        updatePasswordToServer(userId, existingPassword, newPassword)
        setDisablePasswordEdit(true)
    }

    const settingsButtonDisplay = () => {
        if (disableSettingsEdit === false) {
            return <Button variant="custom" style={{color: "#fff3e1", background: "black"}} type="submit" onClick={() => handleSettingsSubmit(userId, name, email)}>Submit</Button>
        }
        else {
            return <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={() => setDisableSettingsEdit(false)}>Edit Settings</Button>
        }
    }

    const passwordButtonDisplay = () => {
        if (disablePasswordEdit === false) {
            return <Button variant="custom" style={{color: "#fff3e1", background: "black"}} type="submit" onClick={() => handlePasswordSubmit(userId, existingPassword, newPassword)}>Submit Password</Button>
        }
        else {
            return <Button variant="custom" style={{color: "#fff3e1", background: "black"}} onClick={() => setDisablePasswordEdit(false)}>Edit Password</Button>
        }
    }

    const updateUserToServer = (userId, name, email) => {
        const [username, password, existingPassword, newPassword, message, taskId] = ''
        const dispatchType = "UPDATE_USER"
        const updateType = "update_user_settings"
        const fetchUrl = "http://localhost:3000/updateuser"
        dispatch(fetchUser(
            userId,
            username,
            password,
            email,
            name,
            existingPassword,
            newPassword,
            message,
            updateType,
            taskId,
            dispatchType,
            fetchUrl
        ))
        // userSettingsMessage(currentState.usersReducer.user[0].message)
    }

    const updatePasswordToServer = (userId, existingPassword, newPassword) => {
        const [username, password, message, name, email, taskId] = ''
        const dispatchType = "UPDATE_USER"
        const updateType = "update_password"
        const fetchUrl = "http://localhost:3000/updateuser"

        dispatch(fetchUser(
            userId,
            username,
            password,
            email,
            name,
            existingPassword,
            newPassword,
            message,
            updateType,
            taskId,
            dispatchType,
            fetchUrl
        ))
        // userSettingsMessage(currentState.usersReducer.user[0].message)
        setExistingPassword('')
        setNewPassword('')
    }

    const userSettingsMessage = (message) => {
        switch (message) {
            case 'password updated':
                setUpdateMessage(1)
                break;
            case 'password update failed':
                setUpdateMessage(2)
                break;
            case 'settings updated':
                setUpdateMessage(3)
                break;
            case 'settings update failed':
                setUpdateMessage(4)
                break;
            default:
                setUpdateMessage(0)
        }
    }

    const passwordControl = () => {
        if (disablePasswordEdit === false) {
            return (
                <div>
                    <br></br><br></br><br></br>
                    <Form.Group className="mb-3">
                        <Form.Label>Existing Password</Form.Label>
                        <Form.Control
                            placeholder={existingPassword}
                            disabled={disablePasswordEdit}
                            onChange={e => setExistingPassword(e.target.value)}
                            type="password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            placeholder={newPassword}
                            disabled={disablePasswordEdit}
                            onChange={e => setNewPassword(e.target.value)}
                            type="password"
                        />
                    </Form.Group>
                </div>
            )
        }
    }

    const updateMessaging = () => {
        let message = ''
        let messageColor = 'black'
        switch (updateMessage) {
            case 1:
                message = 'Password updated successfully';
                messageColor = 'green';
                break;
            case 2:
                message = 'Password not updated successfully. Verify you have correct existing password.'
                messageColor = 'red';
                break;
            case 3:
                message = "Settings updated successfully"
                messageColor = 'green';
                break;
            case 4:
                message = "Settings not updated successfully."
                messageColor = 'red';
                break;
            default:
                message = ''
        }
        return (
            <div className='user-settings-messaging' style={{ color: messageColor }}>
                <br></br>
                <p>{message}</p>
            </div>
        )
    }

    return (
        <div>
            <UserSettings
                disableSettingsEdit={disableSettingsEdit}
                name={name}
                email={email}
                setName={setName}
                updateMessaging={updateMessaging}
                settingsButtonDisplay={settingsButtonDisplay}
                passwordControl={passwordControl}
                passwordButtonDisplay={passwordButtonDisplay}
            />
        </div>
    )

}

export default UserSettingsContainer