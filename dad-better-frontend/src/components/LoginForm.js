import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from '../actions/userActions.js'


function LoginForm(props) {

    const userState = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleOnSubmit = (event) => {
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
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                dispatch({type: "SET_USER", payload: data.user.data})
            
            })
                //localStorage.setItem("jwt", data.jwt)
        // save the token to local storage for future access
        //localStorage.setItem("jwt", data.jwt)
    }

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="w-25" controlId="formBasicEmail">
                    <Form.Control type="username" size="sm" placeholder="Username" />
                </Form.Group>
                <Form.Group className="w-25" controlId="formBasicPassword">
                    <Form.Control type="password" size="sm" htmlSize="10" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button variant="primary" onClick={props.handleShow}>
                    Signup
                </Button>
            </Form>
        </div>
    )

}


export default LoginForm