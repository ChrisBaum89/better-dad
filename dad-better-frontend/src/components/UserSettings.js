import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function UserSettings() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const userId = currentUser.data.id
    const [disableSettingsEdit, setDisableSettingsEdit] = useState(true)
    const [disablePasswordEdit, setDisablePasswordEdit] = useState(true)
    const [name, setName] = useState(currentUser.data.attributes.name)
    const [email, setEmail] = useState(currentUser.data.attributes.email)
    const [existingPassword, setExistingPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const jwtKey = currentState.usersReducer.user[0].jwt

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
            return <Button variant="primary" type="submit" onClick={() => handleSettingsSubmit(userId, name, email)}>Submit</Button>
        }
        else {
            return <Button onClick={() => setDisableSettingsEdit(false)}>Edit Settings</Button>
        }
    }

    const passwordButtonDisplay = () => {
        if (disablePasswordEdit === false) {
            return <Button variant="primary" type="submit" onClick={() => handlePasswordSubmit(userId, existingPassword, newPassword)}>Submit Password</Button>
        }
        else {
            return <Button onClick={() => setDisablePasswordEdit(false)}>Edit Password</Button>
        }
    }

    const updateUserToServer = (userId, name, email) => {
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: userId,
                    email: email,
                    name: name,
                    update_type: "update_user_settings",
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }

    const updatePasswordToServer = (userId, existingPassword, newPassword) => {
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: userId,
                    existing_password: existingPassword,
                    new_password: newPassword,
                    update_type: "update_password",
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                debugger
                dispatch({ type: "UPDATE_USER", payload: data })
            })
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
                        onChange={e => setExistingPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        placeholder={newPassword}
                        disabled={disablePasswordEdit}
                        onChange={e => setNewPassword(e.target.value)} />
                </Form.Group>
            </div>
        )
        }
    }


    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder={name}
                    disabled={disableSettingsEdit}
                    onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    placeholder={email}
                    disabled={disableSettingsEdit}
                    onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            {settingsButtonDisplay()}

            {passwordControl()}

            {passwordButtonDisplay()}

        </div>
    )

}

export default UserSettings