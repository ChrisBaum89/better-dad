import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from '../img/task_background.jpeg'
import '../css/Tasks.css'
import Button from 'react-bootstrap/Button'

function TaskList(props) {

    const checkIfAssignedTasks = (tasks) => {
        if (tasks.length > 0) {
            return (
                <div>
                    <div class="task-title">
                        <h2>Tasks</h2>
                    </div>
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
                                            <Button variant="primary" taskid={task.attributes.task.id} taskvalue={task.attributes.task.value} onClick={props.handleClick}>
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
        else {
            return (<div>
                <div class="task-title">
                    <h2>Tasks</h2>
                </div>
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
            </div>
            )
        }
    }

    return (
        <div class="task-carousel">
            {checkIfAssignedTasks(props.tasks)}
        </div>
    )

}

export default TaskList