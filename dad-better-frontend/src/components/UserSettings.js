import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function UserSettings() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const name = currentUser.data.attributes.name
    const email = currentUser.data.attributes.email
    const [disableEdit, setDisableEdit] = useState(true)

    const buttonDisplay = () => {
        if (disableEdit === false) {
            return <Button onClick={() => setDisableEdit(false)}>Submit</Button>
        }
        else{
            return <Button onClick={() => setDisableEdit(false)}>Edit Settings and Password</Button>
        }
    }

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder={name} disabled={disableEdit} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder={email} disabled={disableEdit} />
            </Form.Group>

            {buttonDisplay()}

        </div>
    )

}

export default UserSettings