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
    const currentUser = currentState.usersReducer.user[0]
    debugger
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

    const checkAssignedTask = (task) =>{
        return task.type === "assigned_task"
    }

    const assignedTasks = (currentUser) => {
        if (currentUser !== 0) {
            
            const userAssignedTasks = currentUser.included.filter(checkAssignedTask)
            return userAssignedTasks
        }
        else {
            return "No user. No tasks assigned"
        }

    }


    return (
        <div>
            <div className="logout">
                <LogoutButton />
            </div>
            <div className="profile-content">
                <UserContainer username={username(currentUser)} score={score(currentUser)} />
                <BadgeContainer />
                <QuoteContainer />
                <TaskContainer userAssignedTasks={assignedTasks(currentUser)} />
                <NavigationContainer />
            </div>
        </div>
    )
}

export default ProfileContainer