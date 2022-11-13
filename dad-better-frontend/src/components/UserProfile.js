import React from "react";
import { useSelector, useDispatch } from 'react-redux';

function UserProfile(){
    const currentUser = useSelector((state) => state.usersReducer.user[0])
    const dispatch = useDispatch()

    return (
        <div>
            <h1>User Profile</h1>
        </div>
    )

}

export default UserProfile