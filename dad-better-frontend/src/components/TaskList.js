import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from '../img/task_background.jpeg'
import '../css/Tasks.css'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';

function TaskList(props) {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const assignedTasks = props.userAssignedTasks
    const jwtKey = currentState.usersReducer.user[0].jwt

    const dispatch = useDispatch()

    const updateUserToServer = (user, score, taskId) => {
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.data.id,
                    score: score,
                    task_id: taskId,
                },
                jwt: {
                    jwt: jwtKey,

                }
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }


    const handleClick = (event, user = currentUser) => {
        const taskId = event.target.attributes.taskid.value
        const score = event.target.attributes.taskvalue.value
        updateUserToServer(user, score, taskId)
        return true
    }


    return (
        <div class="task-carousel">
            <Carousel>
                {assignedTasks.map(task => {
                    return (
                        <Carousel.Item interval={10000000}>
                            <img
                                className="d-block w-100"
                                src={task_background}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div class="task-carousel-caption">
                                    <h6>{task.attributes.task.description}</h6>
                                    <p>Points: {task.attributes.task.value}</p>
                                    <Button variant="primary" taskid={task.attributes.task.id} taskvalue={task.attributes.task.value} onClick={handleClick}>
                                        Complete
                                    </Button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )

}

export default TaskList

        // < Carousel.Item interval = { 10000000} >
        //                 <img
        //                     className="d-block w-100"
        //                     src={task_background}
        //                     alt="First slide"
        //                 />
        //                 <Carousel.Caption>
        //                     <h4>hi</h4>
        //                     <p>Points: 10</p>
        //                     <Button variant="primary">
        //                         Complete
        //                     </Button>
        //                 </Carousel.Caption>
        //             </Carousel.Item >