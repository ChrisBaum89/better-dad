import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "../css/App.css"


function LoginSignupForm(props) {

    return (
        <div className='login-form'>
                <Form onSubmit={props.handleOnSubmit}>
                    <div className="login-form-content">
                    <Form.Group className="w-100" controlId="formBasicEmail">
                        <Form.Control required type="username" size="sm" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="w-100" controlId="formBasicPassword">
                        <Form.Control required type="password" size="sm" htmlSize="10" placeholder="Password" />
                    </Form.Group>
                    </div>
                    {props.invalidLogin()}
                    <br></br>
                    <Button variant="custom" type="submit" style={{
                        color: "#fff3e1", background: "black"
                    }}>Login</Button>
                    <Button variant="custom" onClick={props.handleShow} style={{
                        color: "#fff3e1", background: "black"
                    }}>Signup</Button>
                </Form>
        </div>
    )

}


export default LoginSignupForm