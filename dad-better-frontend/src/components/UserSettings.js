import React from "react";
import { useSelector, useDispatch } from 'react-redux';

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
            <h4>Edit Password</h4>
        </div>
    )

}

export default UserSettings