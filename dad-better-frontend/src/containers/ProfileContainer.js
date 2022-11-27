import React from 'react';
import UserCard from '../components/UserCard';
import BadgeContainer from './BadgeContainer';
import TaskContainer from './TaskContainer';
import NavigationContainer from './NavigationContainer';
import { useSelector } from 'react-redux'
import ProfileHeader from '../components/ProfileHeader';

function ProfileContainer() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const quote = currentState.usersReducer.user[0].quote

    const username = (currentUser) => {
        if (currentUser !== null) {
            return currentUser.data.attributes.username
        }
        else {
            return "no user found"
        }
    }

    const score = (currentUser) => {
        if (currentUser !== null) {
            return currentUser.data.attributes.score
        }
        else {
            return 0
        }
    }

    return (

        <div className="profile-content">
            <div className='profile-header'>
            <NavigationContainer />
            <ProfileHeader quote={quote}/>
            </div>
            <div>
                <UserCard username={username(currentUser)} score={score(currentUser)} />
                <br></br>
                <TaskContainer />
                <br></br>
                <BadgeContainer />
                <br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default ProfileContainer