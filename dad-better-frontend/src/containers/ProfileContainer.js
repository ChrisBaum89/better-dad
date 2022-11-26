import React from 'react';
import UserContainer from './UserContainer';
import BadgeContainer from './BadgeContainer';
import TaskContainer from './TaskContainer';
import QuoteContainer from './QuoteContainer'
import NavigationContainer from './NavigationContainer';
import { useSelector } from 'react-redux'
import Image from 'react-bootstrap/Image'
import MyImage from '../img/better-dad-logo.png'
import Quote from '../components/Quote';

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

    const checkAssignedTask = (task) => {
        return task.type === "assigned_task"
    }

    const assignedTasks = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkAssignedTask)
        }
        else {
            return "No user. No tasks assigned"
        }

    }

    return (

        <div className="profile-content">
            <NavigationContainer />
            <div>
                <br></br>
                <Quote quote={quote}/>
                <div className="better-dad-logo">
                    <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
                </div>
                <UserContainer username={username(currentUser)} score={score(currentUser)} />
                <br></br>
                <QuoteContainer />
                <br></br>
                <TaskContainer userAssignedTasks={assignedTasks(currentUser)} />
                <br></br>
                <BadgeContainer /><br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default ProfileContainer