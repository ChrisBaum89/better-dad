import React from 'react';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';

function TaskContainer (props){
    const currentTasks = useSelector((state) => state)
    debugger
    const dispatch = useDispatch()

    return (
            <div>
                <TaskList tasks={currentTasks}/>
            </div>
        )
    }

export default TaskContainer