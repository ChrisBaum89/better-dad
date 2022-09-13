import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginContainer () {
    
        return (
            <div>
                <LoginForm handleShow={this.props.handleShow}/>
            </div>
        )

}

export default LoginContainer