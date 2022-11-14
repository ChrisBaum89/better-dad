import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import '../css/Tasks.css'
import { formatDateTime } from "../actions/taskActions";
import FavoriteButton from "./FavoriteButton";

function CompletedTaskCard() {

    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const checkCompletedTask = (task) => {
        return task.type === "completed_task"
    }

    const getCompletedTasks = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkCompletedTask)
        }
        else {
            return []
        }
    }

    const userCompletedTasks = getCompletedTasks(currentUser)

    const userCompletedTask = (task) => {
        return (
            <div className="col d-flex justify-content-center">
                <Card style={{ width: '36rem' }} >
                    <Card.Body class='completed-card-body'>
                        <Card.Title class='completed-card-title'>
                            <FavoriteButton />
                            {task.attributes.task.description}
                        </Card.Title>
                        <Card.Text>
                            Score: {task.attributes.task.value}<br></br>
                            Completed: {formatDateTime(task.attributes.created_at)[0]}<br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>)
    }

    return (
        userCompletedTasks.map(userCompletedTask)
    )
}

export default CompletedTaskCard