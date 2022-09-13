import React from "react";
import Button from 'react-bootstrap/Button'
import {useSelector, useDispatch} from 'react-redux'

function LogoutButton() {

    const userState = useSelector((state) => state)
    const dispatch = useDispatch()
    
    const handleClick = () => {
        localStorage.setItem("jwt", "")
        dispatch({type: "LOGOUT"})

    }
    
    return (
        <Button variant="primary" type="submit" onClick={handleClick}>
            Logout
        </Button>
    )
}
export default LogoutButton