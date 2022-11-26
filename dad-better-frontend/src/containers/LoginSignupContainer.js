import React, {useState} from 'react';
import LoginSignupForm from '../components/LoginSignupForm';
import Signup from '../components/Signup';
import { useDispatch } from 'react-redux';

function LoginSignupContainer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                dispatch({ type: "LOGIN_USER", payload: data })
            })
    }
    
    return (
        <div>
            <LoginSignupForm handleShow={handleShow}/>

           <Signup
            handleOnSubmit={handleOnSubmit}
            handleClose={handleClose}
            show={show}
           />
        </div>
    )

}

export default LoginSignupContainer