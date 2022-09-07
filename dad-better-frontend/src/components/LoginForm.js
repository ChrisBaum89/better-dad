import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="w-25" controlId="formBasicEmail">
                        <Form.Control type="username" size="sm" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="w-25" controlId="formBasicPassword">
                        <Form.Control type="password" size="sm" htmlSize="10" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Button variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm