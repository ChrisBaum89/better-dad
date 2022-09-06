import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" value="Username"></input>
                    <input type="text" value="Password"></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    }
}

export default LoginForm