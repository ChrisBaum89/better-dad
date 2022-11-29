import React, {useState} from 'react';
import LoginSignupForm from '../components/LoginSignupForm';
import Signup from '../components/Signup';
import { useDispatch, useSelector } from 'react-redux';
import "../css/App.css"

function LoginSignupContainer() {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const currentState = useSelector((state) => state)
    const user = currentState.usersReducer.user[0]

    const messaging = (user) => {
        if (user !== undefined) {
            return user.message
        }
        else{
            return ""
        }
    }

    const handleClose = () => {
        dispatch({ type: "CLEAR_MESSAGE"})
        setShow(false)
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const [username, password, name, email] = event.target
        createUser(username.value, password.value, name.value, email.value)
    }

    const createUser = (username, password, name, email) => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    email: email,
                    name: name,
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                dispatch({ type: "LOGIN_USER", payload: data })
            })
    }

    return (
        <div className='login-signin-form'>
            <LoginSignupForm handleShow={handleShow}/>

           <Signup
            handleOnSubmit={handleOnSubmit}
            handleClose={handleClose}
            show={show}
            message={messaging(user)}
           />
        </div>
    )

}

export default LoginSignupContainer