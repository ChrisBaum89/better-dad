import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function UserSettings() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const userId = currentUser.data.id
    const [disableEdit, setDisableEdit] = useState(true)
    const [name, setName] = useState(currentUser.data.attributes.name)
    const [email, setEmail] = useState(currentUser.data.attributes.email)

    const handleSubmit = (userId, name, email) => {
        updateUserToServer(userId, name, email)
        setDisableEdit(true)
    }

    const buttonDisplay = () => {
        if (disableEdit === false) {
            return <Button variant="primary" type="submit" onClick={() => handleSubmit(userId, name, email)}>Submit</Button>
        }
        else {
            return <Button onClick={() => setDisableEdit(false)}>Edit Settings and Password</Button>
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
                dispatch({type: "UPDATE_USER", payload: data})
             })
    }

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                placeholder={name} 
                disabled={disableEdit}
                onChange={e => setName(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                placeholder={email} 
                disabled={disableEdit}
                onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            {buttonDisplay()}

        </div>
    )

}

export default UserSettings