import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from '../img/task_background.jpeg'
import '../css/Tasks.css'

import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setUserState } from "../actions/userActions";

function TaskList(props) {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const assignedTasks = props.userAssignedTasks
    const jwtKey = currentState.usersReducer.user[0].jwt

    const dispatch = useDispatch()

    const updateUserToServer = (user, taskId) => {
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.data.id,
                    task_id: taskId,
                    update_type: "task_completed"
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
        updateUserToServer(user, taskId)
    }

    const checkIfAssignedTasks = (tasks) => {
        if (tasks.length > 0) {
            return (
                <Carousel>
                    {tasks.map(task => {
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
            )
        }
        else {
            return (
                <Carousel>
                    <Carousel.Item interval={10000000}>
                        <img
                            className="d-block w-100"
                            src={task_background}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div class="task-carousel-caption">
                                <h4>No tasks currently available. Please check back tomorrow</h4>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        }
    }

    return (
        <div class="task-carousel">
            {checkIfAssignedTasks(assignedTasks)}
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