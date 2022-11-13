import React from 'react';
import UserContainer from './UserContainer';
import BadgeContainer from './BadgeContainer';
import TaskContainer from './TaskContainer';
import QuoteContainer from './QuoteContainer'
import NavigationContainer from './NavigationContainer';
import { useSelector, useDispatch } from 'react-redux'

function ProfileContainer() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

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
        <div>
            <div className="profile-content">
                <NavigationContainer />
                <UserContainer username={username(currentUser)} score={score(currentUser)} />
                <br></br>
                <QuoteContainer />
                <br></br>
                <TaskContainer userAssignedTasks={assignedTasks(currentUser)} />
                <br></br>
                <BadgeContainer />
            </div>
        </div>
    )
}

export default ProfileContainer