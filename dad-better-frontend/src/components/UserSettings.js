import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'

function UserSettings(){
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const name = currentUser.data.attributes.name
    const email = currentUser.data.attributes.email

    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <Button>Edit Settings and Password</Button>

        </div>
    )

}

export default UserSettings