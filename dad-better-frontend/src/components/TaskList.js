import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import task_background from './task_background.jpeg'
import '../css/Tasks.css'
import Button from 'react-bootstrap/Button'

function TaskList(props) {
    
    return (
        

        <div class="task-carousel">
            <Carousel>
                <Carousel.Item interval = {10000000}>
                    <img
                        className="d-block w-100"
                        src={task_background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>task 1</h4>
                        <p>Points: 10</p>
                        <Button variant="primary">
                            Complete
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {10000000}>
                    <img
                        className="d-block w-100"
                        src={task_background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>task 2</h4>
                        <p>Points: 10</p>
                        <Button variant="primary">
                            Complete
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {10000000}>
                    <img
                        className="d-block w-100"
                        src={task_background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>task 3</h4>
                        <p>Points: 10</p>
                        <Button variant="primary">
                            Complete
                        </Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default TaskList