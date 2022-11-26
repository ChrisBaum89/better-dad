import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import Offcanvas from 'react-bootstrap/Offcanvas';

function Signup(props) {

    return (
        <div>
            <Offcanvas show={props.show} onHide={props.handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Signup</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={props.handleOnSubmit}>
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
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default connect()(Signup)