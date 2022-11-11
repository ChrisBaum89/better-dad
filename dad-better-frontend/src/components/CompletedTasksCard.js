import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import task_background from '../img/task_background.jpeg'
import '../css/Tasks.css'

function CompletedTaskCard (){
    const currentUser = useSelector((state) => state.usersReducer.user[0])
    
    const dispatch = useDispatch()

    const checkCompletedTask = (task) =>{
        return task.type === "completed_task"
    }

    const completedTasks = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkCompletedTask)
        }
        else {
            return "No user. No tasks assigned"
        }
    }

    const userCompletedTasks = completedTasks(currentUser)

    const formatDateTime= (dateTime) => {
        const dateTimeArray = []
        const formattedDateTime = new Date(dateTime)
        
        dateTimeArray.push(formattedDateTime.toDateString())
        dateTimeArray.push(formattedDateTime.toTimeString())

        return dateTimeArray
    }

    const userCompletedTask = (task) => {
        return (<div className="col d-flex justify-content-center">
            <Card style={{ width: '36rem' }} >
                <Card.Img src={task_background}></Card.Img>
                <Card.ImgOverlay>
                <Card.Body class='completed-card-body'>
                    <Card.Title class= 'completed-card-title'>
                        {task.attributes.task.description}
                    </Card.Title>
                    <Card.Text>
                        Score: {task.attributes.task.value}<br></br>
                        Completed: {formatDateTime(task.attributes.created_at)[0]}<br></br>
                    </Card.Text>
                </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </div>)
    }

    return (
        userCompletedTasks.map(userCompletedTask)
        )
}

export default CompletedTaskCard