import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {
    


    render(){
        return (
            <div>
                <LoginForm handleShow={this.props.handleShow}/>
            </div>
        )
    }
}

export default LoginContainer