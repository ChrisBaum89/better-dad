import React, {useState} from 'react';
import LoginSignupForm from '../components/LoginSignupForm';
import Signup from '../components/Signup';
import { useDispatch, useSelector } from 'react-redux';
import "../css/App.css"
import { fetchUser } from '../actions/userActions.js';

function LoginSignupContainer() {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0]
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

    const handleSignupOnSubmit = (event) => {
        event.preventDefault()
        const [username, password, name, email] = event.target
        const userId = 0
        const [existingPassword, newPassword] = ''
        const message = 'create user'
        const dispatchType = "LOGIN_USER"
        const fetchUrl = "http://localhost:3000/users"
        
        dispatch(fetchUser(
            userId, 
            username.value, 
            password.value, 
            email.value, 
            name.value, 
            existingPassword, 
            newPassword, 
            message,
            dispatchType,
            fetchUrl
            ))
    }

    const handleLoginOnSubmit = (event) => {
        event.preventDefault()
        const [username, password] = event.target
        const userId = 0
        const [nameUser, email, existingPassword, newPassword, updateType] = ''
        const message = "new user login"
        const dispatchType = "LOGIN_USER"
        const fetchUrl = "http://localhost:3000/login"
        dispatch(fetchUser(
            userId, 
            username.value, 
            password.value, 
            email, 
            nameUser, 
            existingPassword, 
            newPassword, 
            message,
            updateType,
            dispatchType,
            fetchUrl,
            )
        )
    }

    const invalidLogin = () => {
        if (currentUser !== undefined) {
            if (currentState.usersReducer.user[0].message === "Invalid Login") {
                return (
                    <div className='invalid-login'>
                        <div>Username or Password was not valid. Please try again.</div>
                    </div>
                )
            }
        }
    }

    return (
        <div className='login-signin-form'>
            <LoginSignupForm
            handleShow={handleShow}
            handleOnSubmit={handleLoginOnSubmit}
            invalidLogin={invalidLogin}
            />

           <Signup
            handleOnSubmit={handleSignupOnSubmit}
            handleClose={handleClose}
            show={show}
            message={messaging(user)}
           />
        </div>
    )

}

export default LoginSignupContainer