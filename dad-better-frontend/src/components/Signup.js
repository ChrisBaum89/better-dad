import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

function Signup() {

    const userState = useSelector((state) => state)
    const dispatch = useDispatch()


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
                dispatch({type: "SET_USER", payload: data.user.data})
             })
    }

return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="w-100" controlId="formBasicEmail">
                    <Form.Control type="username" size="sm" placeholder="Username" />
                </Form.Group>
                <br></br>
                <Form.Group className="w-100" controlId="formBasicPassword">
                    <Form.Control type="password" size="sm" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group className="w-100" controlId="formBasicName">
                    <Form.Control type="name" size="sm" placeholder="Name" />
                </Form.Group>
                <br></br>
                <Form.Group className="w-100" controlId="formBasicEmail">
                    <Form.Control type="email" size="sm" placeholder="Email" />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    )
}

export default connect()(Signup)