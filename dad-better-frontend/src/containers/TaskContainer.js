import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';

function TaskContainer (props){

    const currentTasks = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((data) => {
            dispatch({type: "ADD_TASKS", tasks: data.data})
        })
    })

    debugger

    return (
            <div>
                <TaskList tasks={currentTasks}/>
            </div>
        )
    }

export default TaskContainer