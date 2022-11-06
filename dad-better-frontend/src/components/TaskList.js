import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from './task_background.jpeg'
import '../css/Tasks.css'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';

function TaskList(props) {

    const currentUser = useSelector((state) => state.usersReducer.user[0].data)
    const dispatch = useDispatch()

    const sendUserToServer = (user, score) => {
        fetch("http://localhost:3000/updatescore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.id,
                    score: score,
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({type: "UPDATE_SCORE", payload: data})})
    }

    const completeTasksToServer = (user, taskId) => {
        fetch("http://localhost:3000/updatetask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.id,
                    task_id: taskId,
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({type: "UPDATE_TASK", payload: data})})
    }


    const handleClick = (event, user = currentUser) => {
        const taskId = event.target.attributes.taskid.value
        const score = event.target.attributes.taskvalue.value
        sendUserToServer(user, score)
        completeTasksToServer(user, taskId)
        return true
    }

    return (
        <div class="task-carousel">
            <Carousel>
                {props.tasks.map(task => {
                    return (
                        <Carousel.Item interval={10000000}>
                            <img
                                className="d-block w-100"
                                src={task_background}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h6>{task.attributes.description}</h6>
                                <p>Points: {task.attributes.value}</p>
                                <Button variant="primary" taskid= {task.id} taskvalue={task.attributes.value} onClick={handleClick}>
                                    Complete
                                </Button>
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