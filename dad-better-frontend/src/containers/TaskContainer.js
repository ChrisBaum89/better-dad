import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from '../img/task_background.jpeg'
import '../css/Tasks.css'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import TaskList from "../components/TaskList";

function TaskContainer() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const jwtToken = localStorage.jwt

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
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${jwtToken}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.data.id,
                    task_id: taskId,
                    update_type: "task_completed"
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
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