import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Signup extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="w-25" controlId="formBasicEmail">
                        <Form.Control type="username" size="sm" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="w-25" controlId="formBasicPassword">
                        <Form.Control type="password" size="sm" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="w-25" controlId="formBasicName">
                        <Form.Control type="password" size="sm" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="w-25" controlId="formBasicEmail">
                        <Form.Control type="password" size="sm" placeholder="Email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup