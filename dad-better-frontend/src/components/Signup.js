import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Signup (props){
    
    const handleOnSubmit = (event) => {
        debugger
        event.preventDefault()
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
                        <Form.Control type="password" size="sm" placeholder="Name" />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="w-100" controlId="formBasicEmail">
                        <Form.Control type="password" size="sm" placeholder="Email" />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        )
}

export default Signup