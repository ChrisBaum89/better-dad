import React, { Component } from 'react';
import UserContainer from './UserContainer';
import BadgeContainer from './BadgeContainer';
import TaskContainer from './TaskContainer';
import QuoteContainer from './QuoteContainer'
import NavigationContainer from './NavigationContainer';
import LogoutButton from "../components/LogoutButton";

class ProfileContainer extends Component {

    render() {
        return (
            <div>
                <div className="logout">
                    <LogoutButton/>
                </div>
                <div className="profile-content">
                    <UserContainer />
                    <BadgeContainer />
                    <QuoteContainer />
                    <TaskContainer />
                    <NavigationContainer />
                </div>
            </div>
        )
    }
}

export default ProfileContainer