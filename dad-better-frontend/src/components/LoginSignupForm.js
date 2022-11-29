import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'
import "../css/App.css"


function LoginSignupForm(props) {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0]
    const dispatch = useDispatch()

    const handleLoginOnSubmit = (event) => {
        event.preventDefault()
        const [username, password] = event.target
        sendLoginToServer(username.value, password.value)
    }

    const sendLoginToServer = (username, password) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    message: "new user login"
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                dispatch({ type: "LOGIN_USER", payload: data })
            })
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
        <div className='login-form'>
            <Form onSubmit={handleLoginOnSubmit}>
                <Form.Group className="w-100" controlId="formBasicEmail">
                    <Form.Control required type="username" size="sm" placeholder="Username" />
                </Form.Group>
                <Form.Group className="w-100" controlId="formBasicPassword">
                    <Form.Control required type="password" size="sm" htmlSize="10" placeholder="Password" />
                </Form.Group>
                {invalidLogin()}
                <br></br>
                <Button variant="primary" type="submit">Login</Button>
                <Button variant="primary" onClick={props.handleShow}>Signup</Button>
            </Form>
        </div>
    )

}


export default LoginSignupForm