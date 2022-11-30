import React from "react";
import '../css/Tasks.css'
import { useSelector, useDispatch } from 'react-redux';
import TaskList from "../components/TaskList";
import { fetchUser } from "../actions/userActions";

function TaskContainer() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user

    const dispatch = useDispatch()

    const checkAssignedTask = (task) => {
        return task.type === "assigned_task"
    }

    const assignedTasks = (user) => {
        if (user !== 0) {
            return user.included.filter(checkAssignedTask)
        }
        else {
            return "No user. No tasks assigned"
        }

    }
    const updateUserToServer = (user, taskId) => {
        const [username, password, nameUser, email, existingPassword, newPassword, message] = ''
        const userId = user.data.id
        const updateType = 'task_completed'
        const dispatchType = "UPDATE_USER"
        const fetchUrl = "http://localhost:3000/updateuser"
        dispatch(fetchUser(
            userId, 
            username, 
            password, 
            email, 
            nameUser, 
            existingPassword, 
            newPassword, 
            message,
            updateType,
            taskId,
            dispatchType,
            fetchUrl,
            )
        )
    }

    const handleClick = (event, user = currentUser) => {
        const taskId = event.target.attributes.taskid.value
        updateUserToServer(user, taskId)
    }

    return (
       <TaskList 
           tasks={assignedTasks(currentUser)}
            handleClick={handleClick}
       />
    )

}

export default TaskContainer