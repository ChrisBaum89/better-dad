import React from 'react';
import UserContainer from './UserContainer';
import BadgeContainer from './BadgeContainer';
import TaskContainer from './TaskContainer';
import QuoteContainer from './QuoteContainer'
import NavigationContainer from './NavigationContainer';
import LogoutButton from "../components/LogoutButton";
import { useSelector, useDispatch } from 'react-redux'


function ProfileContainer() {
    const currentState = useSelector((state) => state)
    const dispatch = useDispatch()

    const username = () => {
        if (currentState.usersReducer.user.length > 0) {
            return currentState.usersReducer.user[0].attributes.username
        }
        else {
            return "no user found"
        }
    }
    
    const score = () => {
        if (currentState.usersReducer.user.length > 0) {
            return currentState.usersReducer.user[0].attributes.score
        }
        else {
            return 0
        }
    }

    return (
        <div>
            <div className="logout">
                <LogoutButton />
            </div>
            <div className="profile-content">
                <UserContainer username={username()} score={score()} />
                <BadgeContainer />
                <QuoteContainer />
                <TaskContainer />
                <NavigationContainer />
            </div>
        </div>
    )
}

export default ProfileContainer