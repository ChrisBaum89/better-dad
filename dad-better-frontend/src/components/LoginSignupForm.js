import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "../css/App.css"


function LoginSignupForm(props) {
    
    return (
        <div className='login-form'>
            <Form onSubmit={props.handleOnSubmit}>
                <Form.Group className="w-100" controlId="formBasicEmail">
                    <Form.Control required type="username" size="sm" placeholder="Username" />
                </Form.Group>
                <Form.Group className="w-100" controlId="formBasicPassword">
                    <Form.Control required type="password" size="sm" htmlSize="10" placeholder="Password" />
                </Form.Group>
                {props.invalidLogin()}
                <br></br>
                <Button variant="primary" type="submit">Login</Button>
                <Button variant="primary" onClick={props.handleShow}>Signup</Button>
            </Form>
        </div>
    )

}


export default LoginSignupForm