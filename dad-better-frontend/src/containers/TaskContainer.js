import React from 'react';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';

function TaskContainer (props){
    const currentState = useSelector((state) => state)
    const dispatch = useDispatch()
    debugger
    return (
            <div>
                <TaskList />
            </div>
        )
    }

export default TaskContainer